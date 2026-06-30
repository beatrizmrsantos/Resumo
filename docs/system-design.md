# System Design Interview Guide


## Table of Contents

**Part 1 — The Interview Framework**
- 1.01 Overview & Mindset
- 1.02 Step 1 — Clarify Requirements
- 1.03 Step 2 — Estimate Scale
- 1.04 Step 3 — High-Level Design
- 1.05 Step 4 — Deep Dive into Components
- 1.06 Step 5 — Identify Bottlenecks & Trade-offs

**Part 2 — Networking & Traffic Management**
- 2.01 DNS
- 2.02 Load Balancing
- 2.03 Proxies
- 2.04 Content Delivery Network (CDN)
- 2.05 API Gateway & Rate Limiting

**Part 3 — Data Storage**
- 3.01 SQL at Scale
- 3.02 NoSQL at Scale
- 3.03 Caching
- 3.04 Object Storage
- 3.05 Search Engines

**Part 4 — Communication Patterns**
- 4.01 APIs — REST vs GraphQL vs gRPC
- 4.02 Message Queues & Event-Driven Architecture
- 4.03 WebSockets & Real-Time Communication

**Part 5 — Reliability & Scalability**
- 5.01 Scalability
- 5.02 CAP Theorem & Consistency Models
- 5.03 Availability & Fault Tolerance
- 5.04 Microservices vs Monolith
- 5.05 Monitoring & Observability

**Part 6 — Practice Exercises**
- 6.01 Design a URL Shortener
- 6.02 Design a Social Media Feed
- 6.03 Design a Real-Time Chat Application
- 6.04 Design a File Storage System
- 6.05 Design a Notification System


---


# Part 1 — The Interview Framework


## 1.01 Overview & Mindset


### What is a System Design Interview?

A System Design interview asks you to design a large-scale distributed system from scratch — for example, "Design Twitter" or "Design a URL shortener". There is no single correct answer. The interviewer wants to evaluate how you think, what trade-offs you consider, and how you communicate complex ideas.

System design interviews test:
- Your ability to break a vague problem into concrete requirements
- Your knowledge of distributed systems building blocks
- Your awareness of trade-offs (consistency vs availability, cost vs performance)
- Your communication — can you explain your reasoning clearly?

With 1 year of experience you are not expected to have built these systems. You are expected to understand the concepts, apply them logically, and demonstrate that you think like an engineer.


### The Golden Rule: Think Out Loud

Never go silent. The interviewer cannot evaluate what they cannot hear. Every decision you make — even uncertain ones — should be spoken:

- "I'm going to assume we need to support 10 million users. Does that sound right?"
- "I could use SQL or NoSQL here. I'll go with SQL because consistency matters for payments, and we can shard later."
- "This is a potential bottleneck — let me address it."

Always ask clarifying questions before drawing anything. A rushed design based on wrong assumptions wastes everyone's time.


### The Five-Step Framework

Every system design interview should follow the same structure:

```text
Step 1  →  Clarify Requirements          (5 min)
Step 2  →  Estimate Scale                (3 min)
Step 3  →  High-Level Design             (10 min)
Step 4  →  Deep Dive into Components     (15 min)
Step 5  →  Identify Bottlenecks          (5 min)
```

The following chapters cover each step in detail.


## 1.02 Step 1 — Clarify Requirements


### Why This Matters

Requirements determine everything: what data you store, how you scale, which consistency model you need, what latency is acceptable. Skipping this step leads to designing the wrong system.

Always distinguish between two types of requirements:


### Functional Requirements

What the system **does** — the features.

Ask:
- "What are the core features I need to design? Should I cover all of them or focus on the most critical ones?"
- "Who are the users? Consumers, businesses, developers via an API?"
- "What are the primary operations — read-heavy, write-heavy, or balanced?"

Example for a URL shortener:
- Users can submit a long URL and receive a short URL
- Visiting the short URL redirects to the original
- Users can optionally set an expiry date


### Non-Functional Requirements

How the system **performs** — quality attributes.

Ask:
- "What is the expected scale — how many users, requests per second?"
- "What latency is acceptable?" (e.g. redirect must be < 100ms)
- "What availability do we need?" (99.9% = 8.7h downtime/year; 99.99% = 52 min/year)
- "Does the system need to be strongly consistent or is eventual consistency acceptable?"
- "Are there any security requirements — authentication, authorisation, encryption?"
- "What regions does it need to serve — global or single region?"

Example for a URL shortener:
- 100 million URLs created per day
- Redirects must be < 100ms (latency-sensitive)
- 99.99% availability for redirects
- URLs must not be guessable (no sequential IDs)


### What to Write Down

Before moving on, write a short bullet list on the (virtual) whiteboard:

```text
Functional:
  - Create short URL from long URL
  - Redirect short URL → long URL
  - Optional expiry

Non-Functional:
  - 100M new URLs/day, 10B redirects/day
  - Redirect latency < 100ms (p99)
  - 99.99% availability
  - Short codes must not be guessable
```

This becomes your north star for every decision you make.


## 1.03 Step 2 — Estimate Scale


### Why Estimate?

Estimates help you decide:
- How many servers do you need?
- What database can handle this load?
- Do you need a cache?
- What is the storage footprint over 5 years?

You do not need precision — you need an order of magnitude. Interviewers know these are rough estimates.


### Key Numbers to Know

Memorise these — they come up in every interview:

| Unit | Value |
|---|---|
| 1 KB | 1,000 bytes |
| 1 MB | 1,000 KB |
| 1 GB | 1,000 MB |
| 1 TB | 1,000 GB |
| 1 million / day | ~12 requests/second |
| 1 billion / day | ~11,600 requests/second |
| Disk read | ~1–10 ms |
| Memory read | ~100 ns (10,000× faster than disk) |
| Network round-trip (same region) | ~1 ms |
| Network round-trip (cross-continent) | ~100–200 ms |


### Traffic Estimation

```text
100 million URLs created per day
→ 100,000,000 / 86,400 seconds ≈ 1,160 writes/second

Read:write ratio for URL shortener ≈ 100:1
→ 1,160 × 100 = 116,000 reads/second (redirects)
```


### Storage Estimation

```text
Each URL record: ~500 bytes (long URL + short code + metadata)
100M URLs/day × 500 bytes = 50 GB/day
Over 5 years: 50 GB × 365 × 5 ≈ 91 TB
```


### Bandwidth Estimation

```text
Writes: 1,160 req/s × 500 bytes = 580 KB/s (~0.6 MB/s)
Reads:  116,000 req/s × 500 bytes = 58 MB/s
```

These numbers tell you: this system is heavily read-biased, latency-sensitive for reads, and the dataset is large. You now know you need a cache and probably a CDN.


## 1.04 Step 3 — High-Level Design


### What to Draw

At this stage you are drawing the skeleton of the system — the main components and how data flows between them. Do not go into implementation detail yet.

A typical high-level diagram includes:

```text
Client
  ↓
DNS
  ↓
Load Balancer
  ↓
Application Servers (stateless)
  ↓           ↓
Cache       Database
             ↓
         Object Storage (if needed)
```

Describe each component as you add it:
- "Clients hit a load balancer which distributes traffic across stateless API servers."
- "API servers read from a cache first. On a cache miss, they query the database."
- "Writes go directly to the primary database."


### Keep It Simple First

Start with the simplest design that works. Resist the urge to jump straight to Kafka and microservices. A single API server + database + cache solves 80% of problems at moderate scale. You add complexity only when you can justify it with a specific bottleneck.

Simple first:
```text
Client → API Server → Database
```

Then evolve:
```text
Client → Load Balancer → API Servers (×N) → Cache → Database (primary + replicas)
```


### Identify the Core Entities

What data does the system store? Name the primary entities and their key attributes:

```text
URL shortener entities:
  - URL { id, longUrl, shortCode, userId, createdAt, expiresAt }
  - User { id, email, createdAt }
```

This helps you reason about storage, access patterns, and schema design.


## 1.05 Step 4 — Deep Dive into Components


### Let the Interviewer Guide You

After presenting the high-level design, ask: "Which part would you like me to go deeper on?" The interviewer will direct you to the areas they care most about. Common deep-dives:

- The database schema and access patterns
- The caching strategy
- How you generate unique IDs / short codes
- How you handle failures
- How the system scales to 10× current load


### Deep Dive Example: URL Short Code Generation

Bad approach — sequential IDs:
- Predictable, enumerable. Anyone can crawl all URLs.

Better approach — Base62 encoding of a random or hash-based value:

```text
Characters: a-z, A-Z, 0-9 → 62 characters
6-character code → 62^6 = 56 billion combinations
```

Options:
1. **MD5/SHA hash + truncate** — hash the long URL, take first 6 chars. Risk of collisions.
2. **UUID + Base62 encode** — random, collision probability negligible at scale.
3. **Counter + Base62 encode** — use a distributed counter (e.g. Redis INCR) then encode. Predictable order but no collision risk.

For a URL shortener, option 3 (counter + Base62) is the most common interview answer because it is simple and collision-free.


### Deep Dive Example: Database Schema

```sql
CREATE TABLE urls (
    id          BIGINT PRIMARY KEY,
    short_code  VARCHAR(10) UNIQUE NOT NULL,
    long_url    TEXT NOT NULL,
    user_id     BIGINT,
    created_at  TIMESTAMP DEFAULT NOW(),
    expires_at  TIMESTAMP
);

CREATE INDEX idx_short_code ON urls(short_code);
```

Access pattern: `SELECT long_url FROM urls WHERE short_code = ?`

This is a point lookup by short_code — very fast with an index. At massive scale (billions of rows) you would shard by short_code.


## 1.06 Step 5 — Identify Bottlenecks & Trade-offs


### Always Address These Areas

Before finishing, explicitly call out:

**Single points of failure** — What happens if the database crashes? If a server dies?
Solution: replication, multiple availability zones, health checks.

**Hotspots** — What if a single short URL (e.g. a viral link) gets 1 million requests per second?
Solution: CDN edge caching, so the redirect never hits your servers.

**Scaling the database** — What happens when the dataset grows to 100 TB?
Solution: database sharding by short_code hash.

**Data consistency** — If you have replicas, reads may return stale data momentarily (eventual consistency). Is that acceptable?
For a URL shortener, yes — a 1-second delay before a new URL is globally visible is acceptable.


### Trade-off Examples to Mention

| Decision | Option A | Option B | Chose because |
|---|---|---|---|
| Short code generation | Random UUID | Counter + Base62 | Counter: simpler, no collisions |
| Database | SQL (PostgreSQL) | NoSQL (DynamoDB) | SQL: simple schema, easy to query |
| Cache eviction | LRU | LFU | LRU: popular URLs stay cached; simple |
| Consistency | Strong | Eventual | Eventual: higher availability, acceptable for redirects |


---


# Part 2 — Networking & Traffic Management


## 2.01 DNS


### What DNS Does

DNS (Domain Name System) translates a human-readable domain (e.g. `www.example.com`) into an IP address that routers can use. It is the internet's phone book.


### Resolution Flow

```text
Browser cache → OS cache → Local DNS resolver
  → Root nameserver (.)
    → TLD nameserver (.com)
      → Authoritative nameserver (example.com)
        → Returns A record: 93.184.216.34
```

Each response is cached by the TTL (Time-To-Live) value set on the DNS record.


### Record Types

| Record | Purpose | Example |
|---|---|---|
| A | Domain → IPv4 address | example.com → 93.184.216.34 |
| AAAA | Domain → IPv6 address | example.com → 2001:db8::1 |
| CNAME | Alias to another domain | www.example.com → example.com |
| MX | Mail server for the domain | example.com → mail.example.com |
| TXT | Arbitrary text (SPF, DKIM verification) | — |


### DNS Load Balancing

DNS can distribute load by returning multiple A records for the same domain. Clients pick one (usually the first). This is a simple form of load balancing but has limitations — it does not consider server health or latency.

Round-robin DNS:
```text
example.com → 10.0.0.1
example.com → 10.0.0.2
example.com → 10.0.0.3
```

Modern systems use DNS + a proper load balancer layer for health checking.


### TTL Trade-offs

- **Low TTL (60s)** — Changes propagate quickly. Good for failover. More DNS queries (higher cost).
- **High TTL (3600s)** — Fewer queries. Faster resolution for users. Slow to propagate changes.


## 2.02 Load Balancing


### What a Load Balancer Does

A load balancer distributes incoming requests across multiple backend servers. It is the single entry point that clients talk to. Its jobs:
- Distribute traffic evenly (avoid overloading one server)
- Detect unhealthy servers and stop sending them traffic (health checks)
- Enable horizontal scaling — add/remove servers without clients noticing
- Terminate TLS (HTTPS) before forwarding to internal servers


### Load Balancing Algorithms

| Algorithm | How it works | Best for |
|---|---|---|
| Round Robin | Each server takes turns | Servers with equal capacity |
| Weighted Round Robin | Servers with more capacity get more requests | Heterogeneous servers |
| Least Connections | New request goes to the server with fewest active connections | Long-lived connections (WebSockets) |
| IP Hash | Client IP → always same server (sticky sessions) | Session-based apps without shared session storage |
| Random | Random server selection | Simple, stateless APIs |


### Layer 4 vs Layer 7 Load Balancing

**Layer 4 (Transport)** — Routes based on IP and port only. Does not inspect the request content. Very fast. Cannot route based on URL path.

**Layer 7 (Application)** — Inspects the HTTP request. Can route `/api/` to one server farm and `/static/` to another. Can add headers, do SSL termination, and make routing decisions based on cookies. Slower than L4 but far more powerful.

Most modern systems use L7 load balancers (AWS ALB, Nginx, HAProxy).


### Health Checks

Load balancers continuously probe each backend server:
- **Active health check** — Load balancer sends a request to `/health` every N seconds. If it fails K times, the server is marked unhealthy and removed from rotation.
- **Passive health check** — Load balancer detects failures from real traffic (e.g. 5xx responses) and temporarily removes the server.


### Single Point of Failure

A load balancer itself can be a single point of failure. Solution: run two load balancers in active-passive configuration. A virtual IP floats to the passive one if the active one fails (e.g. AWS uses multiple AZs for this).


## 2.03 Proxies


### Forward Proxy

A forward proxy sits between the client and the internet. The server sees the proxy's IP, not the client's. Used for:
- Anonymity (VPNs, corporate internet filtering)
- Content filtering in organisations
- Caching frequently accessed resources

```text
Client → Forward Proxy → Internet → Server
```


### Reverse Proxy

A reverse proxy sits in front of your servers. The client talks to the proxy, which forwards requests to backend servers. The client does not know which backend server handled the request.

```text
Client → Reverse Proxy → Backend Server(s)
```

Used for:
- Load balancing
- TLS termination (decrypts HTTPS so backend servers receive plain HTTP)
- Caching (return cached responses without hitting the backend)
- Compression (gzip responses)
- Security (hide backend IPs, filter malicious requests)

**Nginx and HAProxy are the most common reverse proxies.** AWS CloudFront and Cloudflare act as reverse proxy + CDN.


## 2.04 Content Delivery Network (CDN)


### What a CDN Is

A CDN is a globally distributed network of edge servers that cache content close to users. Instead of every request going to your origin server in one data centre, users are served from a nearby edge node.

```text
User in Tokyo → Tokyo edge server (cache hit) → response in ~5ms
User in Tokyo → Your origin in Virginia (no CDN) → response in ~200ms
```


### What to Cache on a CDN

- Static assets: images, CSS, JavaScript, fonts, videos
- Publicly cacheable API responses (e.g. public product catalogue)
- HTML pages for SSG/SSR output

Do NOT cache on CDN:
- Personalised responses (user-specific data)
- Session data
- Anything that requires authentication


### Cache-Control Headers

CDNs respect HTTP cache headers set by the origin:

```text
Cache-Control: public, max-age=86400        → cache for 24 hours
Cache-Control: private, no-store            → do not cache
Cache-Control: public, s-maxage=3600        → CDN caches for 1 hour, browser uses own TTL
```


### Cache Invalidation

When content changes, you need to invalidate the CDN cache:
- **TTL expiry** — wait for the max-age to expire. Simple but slow to propagate changes.
- **Versioned URLs** — append a hash to filenames (`main.a3f92c.js`). No invalidation needed — new deploy = new URL.
- **Manual purge** — call the CDN API to purge specific paths immediately. Used for urgent updates.


### CDN for URL Shortener

Redirects (301/302) can be cached at the CDN edge. A viral link served from CDN edge never hits your origin servers — massive cost and latency saving.


## 2.05 API Gateway & Rate Limiting


### API Gateway

An API Gateway is a single entry point for all client requests to a microservices backend. It handles cross-cutting concerns so individual services do not have to.

```text
Client
  ↓
API Gateway
  ├── Authentication & Authorization
  ├── Rate Limiting
  ├── Request Routing → Service A, Service B, Service C
  ├── Request/Response transformation
  ├── Logging & Monitoring
  └── SSL Termination
```

Examples: AWS API Gateway, Kong, Nginx, Envoy.


### Rate Limiting

Rate limiting restricts how many requests a client can make in a given time window. Without it, a single user can overwhelm your system.

**Why rate limit:**
- Protect from DoS / DDoS attacks
- Prevent abuse (scrapers, brute-force login)
- Ensure fair resource sharing among users
- Control costs for expensive operations

**Common rate limit strategies:**

| Algorithm | How it works | Pro | Con |
|---|---|---|---|
| Fixed Window | Count requests per fixed time slot (e.g. 100/min) | Simple | Burst at window boundary |
| Sliding Window Log | Record each request timestamp, count in last N seconds | Accurate | High memory (stores all timestamps) |
| Sliding Window Counter | Weighted average of current + previous window | Accurate, memory-efficient | Slight approximation |
| Token Bucket | Tokens refill at a rate; each request consumes a token | Allows controlled bursts | More complex |
| Leaky Bucket | Requests enter a queue; processed at a fixed rate | Smooth output | Introduces latency |

**Token Bucket** is the most common in practice (used by AWS, Stripe, etc.).

**Where to store rate limit counters:**
Redis is the standard choice — it is fast (in-memory), atomic (INCR is atomic), and supports TTL for automatic window expiry.

```text
Key: rate_limit:{userId}:{window}
Value: request count
TTL: window duration
```


---


# Part 3 — Data Storage


## 3.01 SQL at Scale


### When to Choose SQL

SQL (relational) databases are the right default for most systems:
- Data has a clear structure and relationships
- You need ACID transactions (payments, bookings, inventory)
- You need complex queries with JOINs
- Consistency is more important than raw write throughput

Examples: PostgreSQL, MySQL, Amazon RDS.


### Replication

Replication copies data from a primary (write) node to one or more replica (read) nodes.

```text
                  ┌──────────────┐
Writes ──────────▶│   Primary    │
                  └──────┬───────┘
                         │ async replication
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
      Replica 1      Replica 2      Replica 3
      (reads)        (reads)        (reads)
```

Benefits:
- Scale reads horizontally — spread read traffic across replicas
- High availability — if the primary fails, promote a replica
- Analytics queries run on a replica without slowing writes

Trade-off — **replication lag**: replicas are slightly behind the primary (milliseconds to seconds). Reads from replicas may return stale data (eventual consistency). For reads that must see the latest write, always query the primary.


### Sharding (Horizontal Partitioning)

Sharding splits the database into multiple independent shards, each holding a subset of the data.

```text
Shard 0: user_id % 3 == 0  → users A, D, G ...
Shard 1: user_id % 3 == 1  → users B, E, H ...
Shard 2: user_id % 3 == 2  → users C, F, I ...
```

**Shard key** — the field used to route a request to the correct shard. Choose a key with high cardinality and even distribution (e.g. user_id, not country).

**Problems with sharding:**
- **Cross-shard queries** — JOINs across shards are expensive or impossible
- **Rebalancing** — adding a new shard requires redistributing data
- **Hot shards** — if one user generates 90% of traffic, that shard becomes a bottleneck

When to shard: when a single database instance cannot handle the write throughput or storage, even with replicas and caching. This is a last resort — sharding adds enormous operational complexity.


### Indexing at Scale

Indexes speed up reads but slow down writes and consume storage. Key rules:
- Index columns used in WHERE, JOIN ON, and ORDER BY
- Avoid indexing columns with low cardinality (e.g. a boolean field)
- Composite indexes: order matters — `(user_id, created_at)` helps `WHERE user_id = ? ORDER BY created_at` but not `WHERE created_at = ?` alone
- Too many indexes on a write-heavy table will kill write performance


### Connection Pooling

Each database connection is expensive (memory, file descriptor). Applications should use a connection pool — a set of pre-established connections that are reused across requests.

Without pooling: 1,000 concurrent requests = 1,000 database connections → database crashes.
With pooling (e.g. PgBouncer, HikariCP): 1,000 requests share a pool of 50 connections.


## 3.02 NoSQL at Scale


### When to Choose NoSQL

- Schema is flexible or changes frequently
- Need massive write throughput (millions of writes/second)
- Data access pattern is simple (key-value lookups, no complex JOINs)
- Need to store unstructured or semi-structured data
- Need to scale horizontally from the start (NoSQL is built for it)


### Key-Value Stores

The simplest NoSQL type. Maps a key to a value. No schema, no relationships.

- Redis: in-memory, sub-millisecond reads/writes. Used for cache, sessions, leaderboards, rate limiting.
- DynamoDB: managed, durable, scales to any load. Used for metadata stores, shopping carts.

Access pattern: `GET key`, `SET key value`, `DEL key`. No queries, no filters.


### Document Stores

Store JSON-like documents. Flexible schema — documents in the same collection can have different fields.

- MongoDB, Firestore, CouchDB.

Good for: user profiles, product catalogues, CMS content, anything with nested/variable structure.

Aggregation pipelines allow complex queries, but JOINs across collections are expensive. Prefer embedding over referencing where possible.


### Wide-Column Stores

Store data in rows with flexible, sparse columns. Optimised for writing and reading huge volumes with simple access patterns.

- Apache Cassandra, HBase.

Good for: time-series data, IoT sensor readings, activity logs, message history. Cassandra can handle millions of writes/second and is designed to never go down (no master node).

Data model rule: **model by query, not by entity**. Design your table around the exact query you will run, because Cassandra does not support arbitrary WHERE clauses.


### Graph Databases

Store data as nodes (entities) and edges (relationships). Optimised for traversing relationships.

- Neo4j, Amazon Neptune.

Good for: social networks (friends of friends), recommendation engines, fraud detection (detecting patterns of connected accounts).


## 3.03 Caching


### What is a Cache?

A cache is a fast, temporary storage layer that saves the result of an expensive operation so it can be returned quickly next time without repeating the operation.

The fundamental trade-off: **staleness vs speed**. A cache can return data that is not the latest version.


### Cache Hit and Miss

- **Cache hit** — the requested data is in the cache → return immediately (~1ms)
- **Cache miss** — the data is not in the cache → fetch from the database (~10–100ms), store in cache, return


### Where to Cache

```text
Client (browser)   → HTTP cache, Service Worker
CDN                → Edge cache for public content
Application        → In-process cache (HashMap), distributed cache (Redis)
Database           → Query cache, buffer pool
```


### Caching Strategies

#### Cache-Aside (Lazy Loading)
The most common pattern. The application manages the cache directly.

```text
1. Check cache for key
2. Cache hit → return value
3. Cache miss → query DB → store in cache → return value
```

Pro: only caches what is actually requested.
Con: first request always misses (cold start). Stale data if DB is updated without invalidating the cache.

#### Write-Through
Every write goes to the cache AND the database simultaneously.

```text
Write → Cache + DB (synchronous)
Read  → Always hits cache
```

Pro: cache is always up to date.
Con: every write has extra latency. Cache fills with data that may never be read.

#### Write-Behind (Write-Back)
Write goes to the cache first. The cache asynchronously flushes to the database later.

```text
Write → Cache (fast) → async → DB
```

Pro: extremely fast writes.
Con: risk of data loss if cache fails before flushing to DB.

#### Read-Through
Cache sits in front of the DB. Application only talks to the cache.

```text
Application → Cache → (on miss) → DB
```

The cache is responsible for loading from DB on a miss, not the application.


### Cache Eviction Policies

When the cache is full, which items are removed?

| Policy | Removes | Best for |
|---|---|---|
| LRU (Least Recently Used) | Least recently accessed item | General purpose |
| LFU (Least Frequently Used) | Item accessed fewest times | Skewed access (some items very popular) |
| FIFO | Oldest item | Simple, predictable |
| TTL-based | Items older than a time limit | Session data, rate limit counters |

Redis supports LRU, LFU, and TTL-based eviction.


### Cache Stampede (Thundering Herd)

If a popular cache entry expires, thousands of concurrent requests may all miss the cache simultaneously and hammer the database.

Solutions:
- **Locking** — only one request queries the DB; others wait
- **Probabilistic early expiry** — start refreshing the cache slightly before it expires
- **Background refresh** — a background job refreshes popular entries before they expire


### What NOT to Cache

- Highly personalised data (every user's cache would be unique — no reuse)
- Security-sensitive data (session tokens, passwords)
- Data that must always be fresh (e.g. bank balance during a transaction)


## 3.04 Object Storage


### What is Object Storage?

Object storage (also called Blob storage) stores arbitrary binary data — images, videos, PDFs, backups, log files — as objects identified by a unique key. It is not a file system (no hierarchy) and not a database (no querying). It is optimised for storing and retrieving large, immutable files cheaply.

Examples: Amazon S3, Azure Blob Storage, Google Cloud Storage.


### How It Works

```text
Upload:   PUT /bucket/my-photo.jpg  (binary data)
Download: GET /bucket/my-photo.jpg  → returns the file

Objects are identified by:
  bucket (container) + key (path) → e.g. s3://photos/user-123/avatar.jpg
```

Each object has associated metadata (content type, size, checksum, custom tags).


### Why Not Store Files in a Database?

- Databases are optimised for structured, indexed data — not large binary blobs
- Storing 10MB images in a DB row bloats the database, slows backups, and makes replication expensive
- Object storage scales to petabytes cheaply ($0.02/GB/month on S3)
- Objects can be served directly via HTTPS URL or through a CDN


### Common Pattern: Pre-Signed URLs

For user uploads, the client should upload directly to S3 — not through your server (avoids your server becoming a bottleneck for large files).

```text
1. Client asks your API: "I want to upload a file"
2. API generates a pre-signed S3 URL (valid for 5 min) and returns it
3. Client uploads the file directly to S3 using the pre-signed URL
4. S3 notifies your backend via event (S3 Event → Lambda / SQS)
```

This keeps your API servers lightweight and scales file uploads independently.


## 3.05 Search Engines


### When Do You Need a Search Engine?

Standard databases support exact-match lookups (`WHERE email = 'x'`) and range queries (`WHERE created_at > ...`). They are not built for full-text search — finding documents that contain a word, ranking results by relevance, handling typos, or searching across multiple fields simultaneously.

Use a search engine when you need:
- Full-text search ("find all posts mentioning 'cloud computing'")
- Fuzzy search (typo tolerance: 'serach' → 'search')
- Faceted filtering (filter products by multiple attributes simultaneously)
- Relevance ranking (most relevant results first)


### How Search Engines Work

A search engine builds an **inverted index**: a map from each word → list of documents containing that word.

```text
Document 1: "The quick brown fox"
Document 2: "The fox jumps over"

Inverted index:
  "fox"   → [doc1, doc2]
  "quick" → [doc1]
  "jumps" → [doc2]
```

Querying "fox" returns [doc1, doc2] instantly — no table scan needed.


### Elasticsearch

The most common search engine in production. Built on Apache Lucene.

Concepts:
- **Index** — equivalent to a database table (stores documents)
- **Document** — a JSON object (the thing being searched)
- **Mapping** — the schema (field types, which fields are analysed/indexed)
- **Shard** — an index is split into shards for horizontal scaling

```text
Architecture:
  Your DB (source of truth)
     ↓ (sync via CDC or message queue)
  Elasticsearch Index
     ↓
  Search API returns document IDs
     ↓
  Fetch full documents from DB (or return from ES directly)
```

Elasticsearch is always a secondary store — your database is the source of truth. ES is eventually consistent with the DB.

Other options: Apache Solr, Typesense (simpler), Algolia (managed SaaS).


---


# Part 4 — Communication Patterns


## 4.01 APIs — REST vs GraphQL vs gRPC


### REST

REST (Representational State Transfer) is the dominant API style. It uses HTTP verbs (GET, POST, PUT, PATCH, DELETE) over standard URLs. Stateless — each request contains all the information needed to process it.

```text
GET    /users/123            → return user 123
POST   /users                → create a new user
PUT    /users/123            → replace user 123
PATCH  /users/123            → partially update user 123
DELETE /users/123            → delete user 123
```

**Over-fetching**: GET /users/123 returns all fields even if you only need the name.
**Under-fetching**: To get a user and their posts, you need two requests: GET /users/123 then GET /users/123/posts.

REST is the right default for public APIs, simple CRUD services, and when you need broad client compatibility.


### GraphQL

GraphQL is a query language for APIs. The client specifies exactly what data it needs in a single request — no more, no less.

```graphql
query {
    user(id: "123") {
        name
        email
        posts {
            title
            createdAt
        }
    }
}
```

One request returns the user and their posts — no under-fetching. The client asks for exactly the fields it needs — no over-fetching.

```text
Single endpoint: POST /graphql
```

Good for:
- Mobile clients (minimise payload size)
- Complex data graphs with many relationships
- BFF (Backend For Frontend) — one API that multiple clients query differently

Challenges:
- N+1 query problem — fetching a list of users and their posts triggers N+1 database queries (solved with DataLoader / batching)
- Caching is harder (no fixed URLs, all POST requests)
- Rate limiting by operation complexity (not just by request count)


### gRPC

gRPC is a high-performance RPC (Remote Procedure Call) framework developed by Google. Uses Protocol Buffers (protobuf) as the message format instead of JSON.

```protobuf
service UserService {
    rpc GetUser (GetUserRequest) returns (User);
    rpc CreateUser (CreateUserRequest) returns (User);
}
```

Protobuf is a binary format — much smaller and faster to serialise than JSON. gRPC uses HTTP/2, enabling multiplexing and bidirectional streaming.

Good for:
- Internal service-to-service communication in microservices (where you control both ends)
- Streaming (server-side push, bidirectional)
- High-throughput, low-latency internal APIs

Not good for: public APIs or browser clients (browser gRPC support requires a proxy like grpc-web).


### Comparison

| | REST | GraphQL | gRPC |
|---|---|---|---|
| Protocol | HTTP/1.1 | HTTP/1.1 | HTTP/2 |
| Format | JSON | JSON | Protobuf (binary) |
| Client specifies fields | No | Yes | No |
| Streaming | No | Subscriptions | Yes (native) |
| Browser support | Full | Full | Requires proxy |
| Caching | Easy (GET) | Hard | Hard |
| Best for | Public APIs | Complex data graphs | Internal microservices |


## 4.02 Message Queues & Event-Driven Architecture


### Why Message Queues?

In a synchronous architecture, Service A calls Service B directly and waits for a response. Problems:
- If Service B is slow, Service A is blocked
- If Service B crashes, Service A's request is lost
- If traffic spikes, Service B gets overwhelmed

A message queue decouples producers from consumers:

```text
Service A → [Queue] → Service B
```

Service A sends a message to the queue and moves on. Service B processes messages at its own pace. If B is down, messages accumulate in the queue and are processed when B recovers.


### Core Concepts

- **Producer** — sends messages to the queue
- **Consumer** — reads and processes messages from the queue
- **Queue** — a buffer that holds messages until consumed
- **Topic** — a named stream of messages (in Kafka/pub-sub systems); multiple consumers can subscribe
- **Message** — the unit of data (usually JSON) passed through the queue
- **Dead Letter Queue (DLQ)** — messages that fail processing after N retries are moved here for inspection


### When to Use a Message Queue

- **Async processing** — user uploads a video; API returns immediately; encoding job runs in background
- **Decoupling** — order service publishes "order placed" event; inventory, email, analytics services each consume it independently
- **Load levelling** — smooth out traffic spikes; queue absorbs bursts and consumers process at a steady rate
- **Fan-out** — one event triggers multiple independent downstream actions


### Kafka vs RabbitMQ

| | Kafka | RabbitMQ |
|---|---|---|
| Model | Log-based (topic/partition) | Message broker (queue) |
| Consumers | Each consumer group reads independently; messages are retained | Each message consumed once; deleted after ACK |
| Retention | Configurable (days, weeks) — consumers can replay | Messages deleted after consumption |
| Throughput | Millions of messages/second | Tens of thousands/second |
| Ordering | Per partition | Per queue |
| Best for | Event streaming, audit logs, real-time analytics, replay | Task queues, RPC, one-time jobs |

**Kafka** is the dominant choice for large-scale event streaming. Think of it as an append-only distributed log.

**RabbitMQ** is simpler for traditional task queues (background jobs, email sending).


### Exactly-Once, At-Least-Once, At-Most-Once

- **At-most-once** — messages may be lost, never duplicated. (fire and forget)
- **At-least-once** — messages are never lost, but may be delivered more than once if the consumer crashes mid-processing. Your consumer must be **idempotent** (processing the same message twice has the same effect as once).
- **Exactly-once** — guaranteed delivery exactly once. Very hard to achieve in practice; Kafka Transactions approximates it.

In most real systems, **at-least-once** with idempotent consumers is the practical standard.


## 4.03 WebSockets & Real-Time Communication


### WebSockets

WebSockets provide a persistent, full-duplex (bidirectional) connection between client and server over a single TCP connection. Either side can send messages at any time — no polling needed.

```text
Client sends: HTTP GET /chat with Upgrade: websocket header
Server responds: 101 Switching Protocols
→ Connection is upgraded to WebSocket
→ Both sides can now send frames freely
```

Good for: real-time chat, live notifications, collaborative editing, live scores, multiplayer games, stock tickers.

Not good for: one-shot requests (REST is better), clients that need to stay connected in the background on mobile (battery drain).


### Scaling WebSockets

WebSockets are stateful — a connected client is tied to a specific server. This breaks horizontal scaling.

```text
Problem:
  User A connected to Server 1
  User B connected to Server 2
  User A sends message to User B
  Server 1 does not know where User B is

Solution:
  Use a pub/sub layer (Redis Pub/Sub or Kafka) as the message bus
  Server 1 publishes message to Redis
  Server 2 subscribes and receives it → pushes to User B
```


### Server-Sent Events (SSE)

SSE is a simpler, one-directional alternative to WebSockets — the server pushes events to the client over a persistent HTTP connection, but the client cannot push back.

```text
Client → GET /events (keeps connection open)
Server → sends event stream: data: {"type": "notification", "msg": "New message"}
```

Good for: live notifications, news feeds, dashboards where the server pushes updates. Simpler than WebSockets, works over HTTP/1.1, supports automatic reconnect.


### Long Polling

A fallback for environments that do not support WebSockets. Client sends a request; server holds it open until there is new data (or a timeout), then responds. Client immediately sends a new request.

```text
Client → GET /updates?since=1234567890
Server holds request open (up to 30s) until new data arrives
Server responds with data
Client immediately sends next GET /updates?since=...
```

Inefficient compared to WebSockets (new HTTP connection per message) but works everywhere.


---


# Part 5 — Reliability & Scalability


## 5.01 Scalability


### Vertical Scaling (Scale Up)

Increase the resources of a single machine — more CPU, RAM, faster SSD.

```text
Before: 1 server, 8 CPU, 16 GB RAM
After:  1 server, 32 CPU, 128 GB RAM
```

Pro: simple — no application changes needed. No distributed systems complexity.
Con: hardware limits — there is a maximum machine size. Single point of failure. Expensive at the top end. Requires downtime to upgrade.

Good as the first response to load — before adding complexity.


### Horizontal Scaling (Scale Out)

Add more machines and distribute load across them.

```text
Before: 1 server
After:  10 servers behind a load balancer
```

Pro: theoretically unlimited scale. Redundancy — one machine dying does not kill the service. Cost-efficient (commodity hardware).
Con: applications must be **stateless** (no local session state — use a shared cache like Redis). Distributed systems complexity. Data consistency across nodes is harder.

Modern cloud systems are designed for horizontal scaling from the start.


### Stateless vs Stateful Services

A stateless service stores no data between requests — every request contains everything needed to process it. Any server can handle any request. This is essential for horizontal scaling.

```text
Stateless: request includes JWT token with user info → any server can validate it
Stateful:  server stores user session in memory → client must always hit the same server (sticky sessions)
```

Move state out of application servers: sessions to Redis, files to S3, data to a database.


### Auto-Scaling

Cloud platforms (AWS, GCP, Azure) support auto-scaling — automatically adding/removing servers based on load (CPU, request rate, queue depth). Combined with a load balancer, this handles traffic spikes without manual intervention and reduces costs during low-traffic periods.


## 5.02 CAP Theorem & Consistency Models


### The CAP Theorem

A distributed system can guarantee at most **two** of three properties:

- **C — Consistency**: every read returns the most recent write (or an error)
- **A — Availability**: every request gets a response (never returns an error, but may be stale)
- **P — Partition tolerance**: the system continues to operate even when network partitions occur

Network partitions are inevitable in any distributed system (networks fail). So in practice, you must choose between **CP** (consistent but may reject requests during a partition) and **AP** (always responds but may return stale data during a partition).

```text
CP systems: ZooKeeper, etcd, HBase — prefer correctness over availability
AP systems: Cassandra, CouchDB, DynamoDB — prefer availability over strict consistency
```


### Consistency Models

Beyond the binary C/A choice, there is a spectrum of consistency levels:

**Strong consistency** — after a write completes, all reads see the new value. Achieved with synchronous replication. Highest latency. Example: single-region SQL with synchronous replicas.

**Read-your-writes consistency** — after you write, you always see your own write. Others may still see old data. Common compromise.

**Eventual consistency** — given enough time with no new writes, all replicas converge to the same value. During that window, reads may return stale data. Example: Cassandra, DynamoDB (with default settings), DNS propagation.

**Causal consistency** — operations that are causally related are seen in order by all nodes. Writes that depend on a previous read are ordered correctly. Example: MongoDB with causal sessions.


### PACELC

An extension of CAP: even when there is no partition, you still face a trade-off between **latency** and **consistency**:

```text
If Partition → choose between Availability and Consistency
Else (no partition) → choose between Latency and Consistency
```

A system with low-latency reads (Redis, Cassandra) accepts eventual consistency. A system with strong consistency (PostgreSQL with synchronous replication) accepts higher latency.


## 5.03 Availability & Fault Tolerance


### Availability Numbers

Availability is expressed as a percentage of uptime per year:

| Availability | Downtime/year | Downtime/month |
|---|---|---|
| 99% | 3.65 days | 7.2 hours |
| 99.9% ("three nines") | 8.76 hours | 43.8 minutes |
| 99.99% ("four nines") | 52.6 minutes | 4.4 minutes |
| 99.999% ("five nines") | 5.3 minutes | 26 seconds |

Most consumer internet services target 99.9%–99.99%. Five nines requires enormous investment and is typically only for life-critical systems.


### Single Points of Failure (SPOF)

A SPOF is any component whose failure brings down the entire system. Identify and eliminate them:

| Component | SPOF | Solution |
|---|---|---|
| Single server | Yes | Multiple servers + load balancer |
| Single database | Yes | Primary + replicas, failover |
| Single load balancer | Yes | Active-passive LB pair |
| Single availability zone | Yes | Multi-AZ deployment |
| Single region | Yes | Multi-region (much more complex) |


### Redundancy

Redundancy means having backup components that can take over if the primary fails.

- **Active-Active**: multiple instances all serve traffic simultaneously. If one fails, the others absorb its load.
- **Active-Passive**: a standby instance monitors the primary and takes over only if it fails. Failover takes seconds to minutes.

Active-Active is preferred for high availability because failover is instantaneous.


### Health Checks & Circuit Breakers

**Health checks** — each service exposes a `/health` endpoint. Load balancers and orchestration systems (Kubernetes) continuously probe it. If unhealthy, the instance is removed from rotation.

**Circuit breaker** — if Service A calls Service B and B starts failing, a circuit breaker stops sending requests to B (opens the circuit) to prevent cascading failures. After a timeout, it allows a small number of test requests. If those succeed, the circuit closes and normal traffic resumes.

```text
CLOSED → normal flow → B is healthy
OPEN   → fast fail (no calls to B) → B is unhealthy
HALF-OPEN → test requests → if OK → CLOSED; if fail → OPEN again
```

Libraries: Resilience4j (Java), Hystrix (Netflix, deprecated).


### Graceful Degradation

Instead of failing completely when a dependency is down, return a reduced but useful response.

Example: if the recommendation engine is down, show popular items instead. If the payment service is slow, show a "processing" page instead of timing out.


## 5.04 Microservices vs Monolith


### Monolith

A monolith is a single deployable unit containing all application functionality.

```text
One codebase → One build → One deployment → One process
```

Pros:
- Simple to develop, test, debug, and deploy at small scale
- No network overhead between components (function calls, not HTTP)
- Easy transactions across all data
- One log stream, one monitoring target

Cons:
- Scaling: must scale the entire application even if only one part is under load
- Deployments: any change requires redeploying the whole application
- Fault isolation: a memory leak in one feature crashes the whole app
- Technology lock-in: the whole app uses the same language and framework


### Microservices

Microservices split the application into small, independently deployable services, each responsible for a single business domain.

```text
User Service  →  Order Service  →  Payment Service  →  Notification Service
    ↕                 ↕                  ↕
 Users DB         Orders DB          Payments DB
```

Pros:
- Independent scaling: scale only the services that need it
- Independent deployment: change the Order Service without touching Payments
- Fault isolation: one service crashing does not bring down everything
- Technology freedom: each service can use its own language/database

Cons:
- Distributed systems complexity: network calls can fail, add latency, be slow
- Data consistency: no cross-service ACID transactions — must use sagas or eventual consistency
- Operational overhead: many services to deploy, monitor, and version
- Testing is harder: integration tests must spin up multiple services

**Rule of thumb**: start with a monolith. Extract services when a specific module needs independent scaling or when team size makes a monolith unwieldy (Conway's Law: your architecture will mirror your team structure).


### The Strangler Fig Pattern

The safest way to migrate from monolith to microservices. Instead of a big-bang rewrite, you incrementally extract services one at a time while the monolith continues running:

```text
1. New feature → build as a microservice
2. Old feature → route to new service via API Gateway
3. Over time → monolith shrinks, new services expand
4. Eventually → monolith is gone
```


## 5.05 Monitoring & Observability


### The Three Pillars of Observability

**Metrics** — numerical measurements over time: request rate, error rate, latency (p50/p95/p99), CPU usage, memory. Used for dashboards and alerts.

**Logs** — structured records of events: what happened, when, which request, which user. Used for debugging and auditing.

**Traces** — end-to-end record of a single request as it flows through multiple services. Shows where time was spent and where errors occurred.

```text
A single HTTP request in a microservices system:
  API Gateway (2ms)
    → User Service (5ms)
      → Database (15ms)
    → Order Service (8ms)
      → Kafka publish (3ms)
```

Distributed tracing tools: Jaeger, Zipkin, AWS X-Ray, Datadog APM.


### Key Metrics to Monitor

**RED Method** (for services):
- **Rate** — requests per second
- **Errors** — error rate (% of requests returning 5xx)
- **Duration** — latency (p50, p95, p99)

**USE Method** (for infrastructure):
- **Utilisation** — % of time the resource is busy (CPU, disk I/O)
- **Saturation** — how much work is queued (memory pressure, network backlog)
- **Errors** — error count

### SLI, SLO, SLA

- **SLI (Service Level Indicator)** — a measured metric: "p99 latency over the last 5 minutes"
- **SLO (Service Level Objective)** — a target: "p99 latency must be < 200ms 99.9% of the time"
- **SLA (Service Level Agreement)** — a contractual commitment with financial penalties if breached

Internal engineering uses SLOs. SLAs are contracts with external customers.


### Alerting

Alerts fire when an SLO is at risk. Good alerts are:
- **Actionable** — someone must be able to fix it
- **Urgent** — fires when users are actually impacted, not speculatively
- **Accurate** — low false-positive rate (alert fatigue kills on-call effectiveness)

Alert on symptoms (high error rate, high latency) not causes (CPU at 70%). Causes help you debug; symptoms tell you users are impacted.


---


# Part 6 — Practice Exercises


## 6.01 Design a URL Shortener


### The Problem

Design a service like bit.ly:
- Users submit a long URL and receive a short URL (e.g. `short.ly/abc123`)
- Visiting the short URL redirects to the original URL
- Short codes should not be guessable

Take 5 minutes to think about this before reading the answer.


### Answer


#### Requirements

Functional:
- Create a short URL from a long URL
- Redirect short URL → long URL
- Optional: custom alias, expiry date

Non-Functional:
- 100M new URLs/day (~1,160 writes/second)
- 10B redirects/day (~116,000 reads/second) → read-heavy (100:1 ratio)
- Redirect latency < 100ms (p99)
- 99.99% availability
- Short codes not guessable


#### Estimates

```text
Storage per URL: ~500 bytes
100M URLs/day × 500 bytes = 50 GB/day
5 years: ~91 TB
```


#### High-Level Design

```text
Client
  ↓
DNS → CDN (caches popular redirects at edge)
  ↓
Load Balancer
  ↓
API Servers (stateless, horizontally scaled)
  ↓           ↓
Cache       Database
(Redis)     (PostgreSQL)
```


#### Short Code Generation

Use a **distributed counter + Base62 encoding**:

```text
1. Atomic counter in Redis: INCR global_counter → returns 1234567
2. Encode 1234567 in Base62 → "5E7" (6 chars = 56B combinations)
3. Store: short_code="5E7", long_url="https://..."
```

This is collision-free and compact.


#### Database Schema

```sql
CREATE TABLE urls (
    id          BIGINT PRIMARY KEY,
    short_code  VARCHAR(10) UNIQUE NOT NULL,
    long_url    TEXT NOT NULL,
    user_id     BIGINT,
    created_at  TIMESTAMP DEFAULT NOW(),
    expires_at  TIMESTAMP
);

CREATE INDEX idx_short_code ON urls(short_code);
```


#### Redirect Flow

```text
GET /abc123
1. Check Redis cache for key "abc123"
2. Cache hit → return 301/302 redirect to long_url
3. Cache miss → SELECT long_url FROM urls WHERE short_code='abc123'
4. Store in Redis (TTL: 24h)
5. Return 301 redirect
```

Use **301 (Permanent)** if the redirect never changes — browsers cache it and stop hitting your server. Use **302 (Temporary)** if you want every redirect to hit your server (for analytics tracking).


#### Bottlenecks & Solutions

- **Read bottleneck** → Redis cache + CDN edge caching of 301s
- **DB scale** → shard by short_code hash when reaching hundreds of TB
- **Viral URL spike** → CDN absorbs it; edge serves redirect without hitting origin
- **Counter SPOF** → shard the counter (multiple Redis nodes, each owns a range)


## 6.02 Design a Social Media Feed


### The Problem

Design the news feed for a social platform (like Twitter/Instagram):
- Users follow other users
- When a user opens the app, they see posts from people they follow, in reverse chronological order
- Users can post new content

Take 5 minutes to think about this before reading the answer.


### Answer


#### Requirements

Functional:
- User can post content
- User can follow/unfollow other users
- User sees a feed of posts from followed users, newest first

Non-Functional:
- 500M users, 10M DAU (daily active users)
- Feed load < 200ms (p99)
- Posts visible in feeds within 5 seconds of publishing (eventual consistency acceptable)
- Read-heavy: 100:1 read to write ratio


#### Two Approaches: Fan-Out on Write vs Fan-Out on Read

**Fan-Out on Write (Push model):**
When user A posts, immediately write the post to the feed cache of every follower.

```text
User A posts
  → Get all followers of A (could be millions for celebrities)
  → For each follower, append post to their feed cache
  → When follower opens feed, read directly from their pre-built feed cache
```

Pro: feed reads are instant (pre-computed).
Con: celebrities with millions of followers make a single post trigger millions of cache writes. Huge write amplification.

**Fan-Out on Read (Pull model):**
When a user opens their feed, fetch recent posts from all people they follow.

```text
User opens feed
  → Get list of followed users
  → For each: SELECT last 20 posts WHERE user_id = ?
  → Merge and sort by time
  → Return top 20
```

Pro: no write amplification, simple.
Con: slow for users who follow thousands of accounts — many queries at read time.

**Hybrid approach (used by Twitter/Instagram):**
- Regular users (<10K followers): fan-out on write (pre-compute feed)
- Celebrities (>10K followers): fan-out on read, merged at read time
- Read path: merge pre-built feed + fresh celebrity posts at load time


#### High-Level Design

```text
Post Service
  ↓
Message Queue (Kafka topic: "new-posts")
  ↓
Feed Fanout Worker
  ↓
Feed Cache (Redis)
  ←── read ── Feed API ← Client
```


#### Database Schema (simplified)

```sql
-- Users and follow relationships
CREATE TABLE users (id BIGINT PRIMARY KEY, username VARCHAR, ...);
CREATE TABLE follows (follower_id BIGINT, followee_id BIGINT, PRIMARY KEY (follower_id, followee_id));

-- Posts
CREATE TABLE posts (
    id          BIGINT PRIMARY KEY,
    user_id     BIGINT NOT NULL,
    content     TEXT,
    created_at  TIMESTAMP DEFAULT NOW()
);
CREATE INDEX idx_posts_user_time ON posts(user_id, created_at DESC);

-- Pre-built feed cache (Redis sorted set, score = timestamp)
-- Key: feed:{user_id}
-- Members: post_ids, scored by created_at
```


#### Bottlenecks & Solutions

- **Celebrity problem** → hybrid fanout; merge at read time
- **Feed cache size** → keep only last 200 posts per user in cache; older posts fetched from DB on scroll
- **New follower** → on follow, backfill recent posts into feed cache asynchronously
- **Deleted post** → tombstone record; filter at read time


## 6.03 Design a Real-Time Chat Application


### The Problem

Design a real-time messaging app (like WhatsApp or Slack):
- Users can send messages to other users or groups
- Messages are delivered in real time
- Message history is persisted

Take 5 minutes to think about this before reading the answer.


### Answer


#### Requirements

Functional:
- 1:1 messaging and group chats
- Real-time message delivery
- Message history (last 30 days)
- Message status: sent, delivered, read

Non-Functional:
- 500M users, 50M concurrent connections
- Message delivery < 200ms
- Messages must not be lost (at-least-once delivery)
- Eventual consistency acceptable (minor delay before all recipients see a message)


#### Connection Model

With 50M concurrent users, you cannot use HTTP polling — too slow and expensive. Use **WebSockets** for persistent connections.

Each chat server manages thousands of WebSocket connections. Since a message sender and recipient may be on different servers, you need a shared pub/sub layer.

```text
User A (connected to Chat Server 1)
  → sends message
  → Chat Server 1 publishes to Redis Pub/Sub channel: "user_B_channel"
  → Chat Server 2 (where User B is connected) subscribes and receives it
  → Chat Server 2 pushes message to User B via WebSocket
```


#### High-Level Design

```text
Client A ─── WebSocket ──▶ Chat Server 1 ──▶ Redis Pub/Sub ──▶ Chat Server 2 ─── WebSocket ──▶ Client B
                                │                                       │
                                ▼                                       ▼
                          Kafka (message log)                 Kafka (message log)
                                │
                                ▼
                          Message DB (Cassandra)
                          Push Notification Service (for offline users)
```


#### Message Delivery for Offline Users

If User B is not connected (offline), WebSocket delivery fails. Fall back to **push notifications** (APNs for iOS, FCM for Android).

```text
Chat Server → check if User B is online (presence service)
  → Online: deliver via WebSocket
  → Offline: send to push notification queue → APNs/FCM
  → User B comes online: pull missed messages from DB
```


#### Database Choice

Chat is write-heavy with simple access patterns (fetch messages for a conversation by time). **Apache Cassandra** is ideal:

```sql
-- Cassandra table (partition by conversation, cluster by time)
CREATE TABLE messages (
    conversation_id UUID,
    created_at      TIMESTAMP,
    message_id      UUID,
    sender_id       UUID,
    content         TEXT,
    PRIMARY KEY (conversation_id, created_at, message_id)
) WITH CLUSTERING ORDER BY (created_at DESC);
```

Partition key = `conversation_id` ensures all messages for a conversation are on the same node. Clustering by `created_at DESC` makes fetching recent messages fast.


#### Message Status

Track message status with a separate table or as fields on the message:

```text
Sent      → message stored in DB
Delivered → recipient's device received the message (ACK from WebSocket/push)
Read      → recipient opened the conversation (client sends read receipt)
```


## 6.04 Design a File Storage System


### The Problem

Design a file storage system like Dropbox or Google Drive:
- Users can upload and download files
- Files should be synced across multiple devices
- Files can be shared with other users

Take 5 minutes to think about this before reading the answer.


### Answer


#### Requirements

Functional:
- Upload, download, delete files
- Sync files across devices
- Share files with other users
- Support large files (up to 5 GB)

Non-Functional:
- 50M users, 10M DAU
- Files should be available within seconds of upload
- Durability: files must never be lost (99.999999999% — "eleven nines" — like S3)
- Availability: 99.99%
- Bandwidth: efficient sync (do not re-upload unchanged files)


#### Core Insight: Split Metadata from File Data

Never store binary file data in your database. Store file metadata (name, size, owner, path) in a relational database, and file data in object storage (S3, GCS).

```text
Database stores:  file_id, name, size, owner, created_at, s3_key
S3 stores:        the actual file bytes
```


#### Upload Flow

```text
1. Client calls API: POST /files (filename, size)
   → API creates file record in DB (status: "uploading")
   → API returns pre-signed S3 URL (valid 15 min)

2. Client uploads file directly to S3 using pre-signed URL
   → Bypasses your API servers entirely (no bottleneck)

3. S3 emits event (S3 Event → SQS → Worker)
   → Worker updates DB: status = "ready", s3_key = "..."
   → Worker notifies other user devices via WebSocket/push
```


#### Efficient Sync: Block-Level Deduplication

For large files, sending the whole file on every change is wasteful. Dropbox splits files into **chunks (blocks)** of ~4 MB:

```text
File → split into blocks [B1, B2, B3, B4]
Each block has a fingerprint (SHA-256 hash)

On sync:
  Client sends: [hash(B1), hash(B2), hash(B3), hash(B4)]
  Server responds: "I already have B1 and B3, send me B2 and B4"
  Client uploads only the changed blocks
```

This is delta sync — only changed parts of a file are transferred.


#### Database Schema

```sql
CREATE TABLE files (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_id    BIGINT NOT NULL,
    name        VARCHAR NOT NULL,
    size_bytes  BIGINT,
    s3_key      VARCHAR UNIQUE,
    status      VARCHAR DEFAULT 'uploading',
    created_at  TIMESTAMP DEFAULT NOW(),
    updated_at  TIMESTAMP DEFAULT NOW()
);

CREATE TABLE file_shares (
    file_id     UUID REFERENCES files(id),
    user_id     BIGINT,
    permission  VARCHAR,  -- 'view', 'edit'
    PRIMARY KEY (file_id, user_id)
);
```


#### Bottlenecks & Solutions

- **Large file uploads** → pre-signed S3 URLs (client uploads directly; no server bottleneck)
- **Sync bandwidth** → block-level deduplication
- **Durability** → S3 stores multiple copies across AZs automatically (eleven nines durability)
- **Slow metadata queries** → index `files(owner_id)` and `files(s3_key)`


## 6.05 Design a Notification System


### The Problem

Design a notification system that can send notifications to millions of users via multiple channels: push notifications (mobile), email, and SMS.

Take 5 minutes to think about this before reading the answer.


### Answer


#### Requirements

Functional:
- Send notifications via push (iOS/Android), email, SMS
- Different notification types: transactional (order confirmed), marketing (weekly digest), real-time alerts
- Users can set preferences (opt out of marketing emails, receive push only)

Non-Functional:
- 10M notifications/day across all channels
- Transactional notifications: deliver within 5 seconds
- Marketing notifications: deliver within 30 minutes (bulk, lower priority)
- At-least-once delivery (retry on failure; consumers must be idempotent)


#### High-Level Design

```text
Triggering Services (Order Service, Auth Service, etc.)
  ↓
Notification Service API (validates, applies user preferences)
  ↓
Message Queue (Kafka — separate topics per channel)
  ├── topic: notifications.push  → Push Worker → APNs (iOS) / FCM (Android)
  ├── topic: notifications.email → Email Worker → SendGrid / SES
  └── topic: notifications.sms   → SMS Worker  → Twilio / SNS
  ↓
Delivery Status Tracker (DB + cache)
```


#### User Preference Filtering

Before queuing a notification, check user preferences:

```text
User settings:
  - push_enabled: true
  - email_enabled: true
  - sms_enabled: false
  - marketing_opt_out: true

Marketing email → blocked (user opted out)
Transactional push → allowed
Transactional SMS → blocked (SMS disabled)
```

Store preferences in a fast-read store (Redis hash per user).


#### Retry & Idempotency

Delivery can fail (APNs returns 503, email provider times out). The worker retries with exponential backoff:

```text
Attempt 1: immediate
Attempt 2: +30 seconds
Attempt 3: +2 minutes
Attempt 4: +10 minutes
After 4 failures: move to DLQ (Dead Letter Queue) for manual inspection
```

Each notification has a unique `notification_id`. External providers and internal systems use this ID to deduplicate retries — if the same `notification_id` is received twice, only process it once.


#### Database Schema

```sql
CREATE TABLE notifications (
    id              UUID PRIMARY KEY,
    user_id         BIGINT NOT NULL,
    type            VARCHAR NOT NULL,   -- 'push', 'email', 'sms'
    channel         VARCHAR NOT NULL,
    template_id     VARCHAR,
    payload         JSONB,
    status          VARCHAR DEFAULT 'pending',  -- pending, sent, failed
    sent_at         TIMESTAMP,
    created_at      TIMESTAMP DEFAULT NOW()
);

CREATE TABLE user_notification_prefs (
    user_id         BIGINT PRIMARY KEY,
    push_enabled    BOOLEAN DEFAULT true,
    email_enabled   BOOLEAN DEFAULT true,
    sms_enabled     BOOLEAN DEFAULT false,
    marketing_opt_out BOOLEAN DEFAULT false
);
```


#### Bottlenecks & Solutions

- **Rate limits on providers** → APNs/FCM/Twilio impose rate limits. Use token bucket at the worker level; batch email sends (SendGrid batch API).
- **Marketing bulk sends** → schedule bulk notifications with a rate-controlled worker (e.g. 100K emails/hour) to avoid overwhelming the provider.
- **Priority** → transactional notifications get a high-priority Kafka partition; marketing goes to a low-priority partition so transactional always flows through.
- **Observability** → track delivery rate, bounce rate, failure rate per channel. Alert if delivery rate drops below 99%.