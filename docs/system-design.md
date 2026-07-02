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
- 2.01 Domain Name System (DNS)
- 2.02 Load Balancing
- 2.03 Proxies
- 2.04 Content Delivery Network (CDN)
- 2.05 API Gateway & Rate Limiting

**Part 3 — Data Storage**
- 3.01 Database Fundamentals
- 3.02 SQL at Scale
- 3.03 NoSQL at Scale
- 3.04 Caching
- 3.05 Object Storage
- 3.06 Search Engines

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
- 5.06 Security
- 5.07 Cloud & Infrastructure

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


### The Running Example: URL Shortener

Throughout Part 1, every step is illustrated with the same example — a URL shortener — so you can see how the framework connects end to end.

A URL shortener is a service that takes a long URL and gives you back a short one:

```text
Input:   https://www.example.com/articles/how-to-prepare-for-system-design-interviews-2024
Output:  https://short.ly/x8kP2q
```

When someone visits `short.ly/x8kP2q` in their browser, the service looks up the original URL and instantly redirects them there. That is it — the whole product.

Real examples you have used: **bit.ly**, **tinyurl.com**, the short links Twitter/X generates automatically.

Why does it exist?
- Long URLs break in emails, SMS messages, and printed materials
- Short links are easier to share and type
- Services track how many times each link was clicked (analytics)

It is a favourite interview question because it looks simple on the surface, but hides real engineering challenges: generating billions of unique short codes without collisions, redirecting hundreds of thousands of times per second with sub-100ms latency, and ensuring the service stays up even if servers fail.


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


## 2.01 Domain Name System (DNS)


### What DNS Does

Every machine on the internet is identified by an **IP address** — a numerical label like `93.184.216.34` (IPv4) or `2001:db8::1` (IPv6). Routers use these numbers to forward traffic to the right destination. But humans are terrible at remembering numbers — we remember names like `www.example.com`.

DNS (Domain Name System) is the system that bridges the gap. It translates a human-readable domain name into the IP address that the network actually needs. Every time you type a URL into your browser, a DNS lookup happens before any HTTP request is sent — your browser first needs to know *where* to send the request.

Think of DNS as a giant, globally distributed phone book: you look up a name (`example.com`) and get back a number (`93.184.216.34`).


### Resolution Flow

DNS resolution is not done by a single server — it is a chain of lookups, each delegating to a more specific authority. Here is exactly what happens when you type `www.example.com` into your browser:

```text
1. Browser cache          → did I look this up recently? (cached for TTL duration)
        ↓ miss
2. OS cache               → did the operating system cache it? (/etc/hosts or OS DNS cache)
        ↓ miss
3. Local DNS resolver     → your ISP's or company's resolver (e.g. 8.8.8.8 for Google DNS)
        ↓ miss
4. Root nameserver (.)    → "I don't know example.com, but I know who handles .com"
        ↓
5. TLD nameserver (.com)  → "I don't know example.com specifically, but ns1.example.com handles it"
        ↓
6. Authoritative nameserver (ns1.example.com) → "www.example.com is at 93.184.216.34"
        ↓
7. Answer returned up the chain → cached at each level for the TTL duration
        ↓
8. Browser connects to 93.184.216.34
```

This whole chain typically completes in **20–120ms** the first time. On subsequent requests (within the TTL), the answer is served from cache in **< 1ms**.

Key players:
- **Root nameservers** — 13 sets of servers at the top of the hierarchy. They do not know individual domains, but they know which nameservers handle each top-level domain (.com, .org, .pt, etc.)
- **TLD nameservers** — managed by registries (Verisign manages `.com`). They know which authoritative nameserver is responsible for each domain under their TLD.
- **Authoritative nameserver** — the server that actually holds the DNS records for your domain. When you buy a domain and configure it (e.g. on Cloudflare or AWS Route 53), you are editing records on the authoritative nameserver.
- **Recursive resolver** — the middleman that does the work of walking the chain. Your ISP provides one, or you can use a public resolver like `8.8.8.8` (Google) or `1.1.1.1` (Cloudflare).


### Record Types

DNS records tell the world different things about your domain. Each record has a type that defines what it does:

| Record | Purpose | Example |
|---|---|---|
| **A** | Maps a domain to an IPv4 address. The most common record — this is what your browser ultimately needs. | `example.com → 93.184.216.34` |
| **AAAA** | Maps a domain to an IPv6 address (the newer, longer format). Used alongside A records for IPv6-capable networks. | `example.com → 2001:db8::1` |
| **CNAME** | Alias — makes one domain point to another domain name instead of an IP. The browser then looks up the target domain. Useful for `www` subdomains or pointing to cloud services. | `www.example.com → example.com` or `app.example.com → myapp.vercel.app` |
| **MX** | Specifies which mail server handles email for the domain. Without this, nobody can send email to `@example.com`. | `example.com → mail.google.com` (priority 10) |
| **TXT** | Stores arbitrary text. Used to verify domain ownership and configure email security policies (SPF prevents email spoofing, DKIM adds a signature to outgoing emails, DMARC sets policy for failed checks). | `"v=spf1 include:_spf.google.com ~all"` |
| **NS** | Declares which nameservers are authoritative for the domain. Set when you register the domain and point it to your DNS provider. | `example.com → ns1.cloudflare.com` |

A common confusion: you cannot put a CNAME on the root domain (`example.com`) — only on subdomains (`www.example.com`). This is why some DNS providers offer a proprietary "CNAME flattening" or "ALIAS" record for the root.


### TTL Trade-offs

Every DNS record has a **TTL (Time-To-Live)** — a number in seconds that tells caches how long to hold onto the answer before asking again. It is set by you on your authoritative nameserver.

**Low TTL (e.g. 60 seconds):**
- Changes propagate across the internet quickly — within a minute, most clients will fetch the new record
- Essential for scenarios where you need fast failover: if your primary server goes down and you update DNS to point to a backup, users switch over within 60 seconds
- Downside: every 60 seconds, every client that needs the record must make a fresh DNS query. For a high-traffic domain, this means millions of queries per day hitting your DNS provider — higher cost and slightly more latency on each lookup

**High TTL (e.g. 3600 seconds = 1 hour or 86400 = 1 day):**
- Clients cache the result for a long time — far fewer DNS queries, faster resolution on repeat visits (served from cache instantly)
- Downside: if you change the IP address (e.g. migrate to a new server or need to respond to an outage), clients keep using the old cached address for up to the full TTL. You cannot force them to flush their cache.

**Best practice:**
- Run a **high TTL day-to-day** (3600s or more) for stability and performance
- **Lower it to 60s a few hours before any planned change** (server migration, IP switch) so the old value expires from caches quickly
- After the change is complete and stable, raise it back up again


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
| Round Robin | Each server takes turns receiving requests (1→2→3→1→2→3...) | Stateless APIs where all servers have the same hardware and each request takes roughly the same time (e.g. a simple REST endpoint) |
| Weighted Round Robin | Same rotation as Round Robin, but servers with higher weight receive proportionally more requests (e.g. a server with weight 3 gets 3× more than one with weight 1) | Mixed infrastructure where some servers are more powerful than others — you do not want to send equal load to a 4-core and a 32-core machine |
| Least Connections | Each new request goes to whichever server currently has the fewest open connections | Long-running requests where response time varies a lot (e.g. WebSocket connections, file uploads, video streaming) — Round Robin would pile too many slow requests onto one server |
| IP Hash | A hash of the client's IP address always maps to the same server | Apps that store session state in server memory (old-school sessions without a shared Redis) — the same user always lands on the same server, so their session is always found. Avoid if you can: stateless design with Redis is better |
| Random | Pick a server at random | Simple stateless services at low scale; also useful in testing to avoid any ordering bias |


### Layer 4 vs Layer 7 Load Balancing

#### What are "layers"?

Networks are described using the **OSI model** — a conceptual stack of 7 layers, each responsible for a different level of communication. You do not need to memorise all 7, but two matter a lot in system design:

```text
Layer 7 — Application   → the content of the request (HTTP, URL path, headers, cookies)
Layer 6 — Presentation  → encryption (TLS/SSL)
Layer 5 — Session       → managing connections
Layer 4 — Transport     → TCP/UDP, IP addresses, port numbers
Layer 3 — Network       → routing packets across networks (IP)
Layer 2 — Data Link     → local network (MAC addresses)
Layer 1 — Physical      → cables, Wi-Fi signals
```

Think of it as envelopes inside envelopes. When your browser makes a request to `https://example.com/api/users`, the data goes through every layer on the way out and is unwrapped layer by layer on the way in:

```text
Your browser creates an HTTP request         (Layer 7)
  → it is encrypted with TLS               (Layer 6)
    → wrapped in a TCP segment             (Layer 4)
      → sent as IP packets                 (Layer 3)
        → transmitted over Wi-Fi/cable     (Layer 1-2)
```

A load balancer that works at **Layer 4** only sees the outer envelope — it knows the IP address and port number, but cannot read what is inside (the HTTP request). A load balancer at **Layer 7** opens all the envelopes and reads the actual HTTP content.


#### Layer 4 — Transport Load Balancer

Routes traffic based only on **IP address and port number**. It does not open or read the HTTP request — it just forwards raw TCP/UDP packets to a backend server.

```text
Client request:  IP 203.0.113.5, port 443
L4 load balancer sees: "a packet on port 443 → forward to server 10.0.0.3"
(it does not know if this is GET /api/users or GET /images/logo.png)
```

**Pro:** Extremely fast — no parsing, no inspection overhead.
**Con:** Cannot make smart routing decisions based on the request content. All traffic on a port goes to the same server pool.

Use when: you need raw throughput and do not need to route based on URL, headers, or cookies.


#### Layer 7 — Application Load Balancer

Reads and understands the full HTTP request — method, URL path, headers, cookies, query parameters. This lets it make intelligent routing decisions.

```text
GET /api/users        → route to API server farm
GET /images/logo.png  → route to static file server (or return directly from cache)
GET /admin            → route to admin server, check auth header first
WebSocket upgrade     → route to WebSocket server farm
```

```text
Client sends: GET /api/users HTTP/1.1 Host: example.com Cookie: session=abc123
L7 load balancer reads all of this and decides where to send it.
```

**Pro:** Smart routing, TLS termination (decrypts HTTPS once here so backend servers receive plain HTTP), can add/remove headers, rate limit per user, route canary releases to a small % of traffic.
**Con:** Slightly more CPU overhead because it has to parse every request.

Use when: you have multiple services behind the same domain, need path-based routing, or need to inspect cookies/headers.


#### In Practice

Most modern systems use **L7** load balancers because the routing flexibility is worth the tiny overhead:
- AWS **ALB** (Application Load Balancer) = Layer 7
- AWS **NLB** (Network Load Balancer) = Layer 4
- **Nginx** and **HAProxy** support both modes
- **Cloudflare** sits at L7 globally


### Health Checks

Load balancers continuously probe each backend server:
- **Active health check** — Load balancer sends a request to `/health` every N seconds. If it fails K times, the server is marked unhealthy and removed from rotation.
- **Passive health check** — Load balancer detects failures from real traffic (e.g. 5xx responses) and temporarily removes the server.


### Single Point of Failure

A load balancer itself can be a single point of failure. Solution: run two load balancers in active-passive configuration. A virtual IP floats to the passive one if the active one fails (e.g. AWS uses multiple AZs for this).


## 2.03 Proxies


### What is a Proxy?

A proxy is an intermediary — a middleman server that sits between two parties and forwards traffic on their behalf. Instead of A talking directly to B, A talks to the proxy, and the proxy talks to B.

```text
Without proxy:   Client ──────────────────────────▶ Server

With proxy:      Client ──▶ Proxy ──▶ Server
```

The party who initiated the connection does not talk directly to the destination. The proxy receives the request, may inspect or modify it, and forwards it. The response comes back the same way.

Why use a proxy at all?
- **Hide identity** — the destination only sees the proxy's IP, not the original sender's
- **Control traffic** — the proxy can filter, block, or modify requests and responses
- **Cache responses** — the proxy can store a copy of the response and return it directly next time, without going to the destination again
- **Add cross-cutting behaviour** — authentication, logging, rate limiting — in one place instead of every service

There are two fundamentally different kinds of proxy, and which side they protect defines everything:


### Forward Proxy

A forward proxy sits between the client and the internet. The server sees the proxy's IP, not the client's. Used for:
- **Anonymity** — the destination server never sees the real client IP, only the proxy's. This is how VPNs work: your traffic leaves through the VPN server's IP, so websites cannot track your real location.
- **Content filtering in organisations** — a company routes all employee internet traffic through a forward proxy. The proxy has a list of blocked domains (social media, gambling sites, etc.) and refuses to forward requests to them. The employee's browser just gets a "blocked" page. IT departments use this to enforce acceptable-use policies and to log what sites employees visit. Every request goes through the proxy, so the company has full visibility and control over outbound traffic.
- **Caching** — if 50 employees request the same file (e.g. a Windows update package), the proxy downloads it once, caches it, and serves the remaining 49 requests from its own storage — saving bandwidth and speeding up delivery.

```text
Client → Forward Proxy → Internet → Server
```


### Reverse Proxy

A reverse proxy sits in front of your servers. The client talks to the proxy, which forwards requests to backend servers. The client does not know which backend server handled the request.

```text
Client → Reverse Proxy → Backend Server(s)
```

Used for:
- **Load balancing** — the reverse proxy distributes incoming requests across multiple backend servers. Clients always talk to a single address (the proxy); they have no idea there are 10 servers behind it. If one server goes down, the proxy stops sending it traffic automatically.
- **TLS termination** — when a client connects over HTTPS, the encrypted connection ends at the proxy. The proxy decrypts the request and forwards it to the backend over plain HTTP (inside your private network where encryption is not needed). This means your backend servers do not need to handle SSL certificates or the CPU cost of encryption — the proxy handles it once, centrally.
- **Caching** — the proxy can store a copy of a response (e.g. a product page, an image) and return it directly to the next client that asks for the same thing, without the request ever reaching a backend server. This reduces load and latency significantly for frequently accessed content.
- **Compression** — the proxy compresses responses (using gzip or brotli) before sending them to the client, reducing the amount of data transferred over the network. Backend servers send uncompressed data to the proxy; the proxy handles compression in one place so every backend benefits.
- **Security** — backend server IPs are never exposed to the internet; all traffic must go through the proxy. The proxy can reject malicious requests (SQL injection patterns, oversized payloads, requests from blocked IPs) before they ever reach your application code.

**Nginx and HAProxy are the most common reverse proxies.** AWS CloudFront and Cloudflare act as reverse proxy + CDN.


## 2.04 Content Delivery Network (CDN)


### What a CDN Is

A CDN is a globally distributed network of edge servers that cache content close to users. Instead of every request going to your origin server in one data centre, users are served from a nearby edge node.

```text
User in Tokyo → Tokyo edge server (cache hit) → response in ~5ms
User in Tokyo → Your origin in Virginia (no CDN) → response in ~200ms
```


### What to Cache on a CDN

The rule is simple: **cache anything that is the same for every user who requests it.**

- **Static assets — images, CSS, JavaScript, fonts, videos** — these files never change between users. Your `logo.png` looks the same whether the requester is in Lisbon or Tokyo. Once the CDN edge has a copy, it can serve millions of users without a single request reaching your origin. This is the most common and highest-value CDN use case.

- **Publicly cacheable API responses** — some API endpoints return the same data for everyone, regardless of who is logged in. For example, a product catalogue (`GET /products`), a list of countries, or today's exchange rates. These can be cached at the CDN edge for a few minutes or hours. Every user who asks for the same endpoint gets the cached response instantly.

- **HTML pages from SSG/SSR** — if your frontend is pre-rendered (Next.js static generation) or server-side rendered into a page that is identical for all visitors (a blog post, a landing page), the resulting HTML can be cached. The CDN serves the full page from the edge without touching your server.


### What NOT to Cache on a CDN — and Why

The rule is the opposite: **never cache anything that is different per user, or that contains sensitive data.**

- **Personalised responses** — if your API returns `GET /dashboard` with the logged-in user's name, balance, and notifications, that response is unique to that user. If you cache it at the CDN edge, the next person who requests `/dashboard` gets someone else's data. This is a serious data leak. Any response that uses user identity to shape its content must bypass the cache.

- **Session data** — sessions are by definition per-user. Caching a session token or session-linked response at the CDN edge means it could be served to the wrong user on the next request from that edge node.

- **Anything that requires authentication** — if a request needs an `Authorization` header or a session cookie to decide what to return, it must reach your origin server. The CDN has no way of knowing whether the requester is allowed to see the cached copy. Caching it would mean any anonymous user could receive protected content just by hitting the same URL.

A quick mental test before caching anything on a CDN: *"Would I be comfortable if a completely different, unknown user received this exact response?"* If no — do not cache it.


### Cache-Control Headers

The CDN does not decide on its own what to cache or for how long — your origin server tells it, using the standard HTTP `Cache-Control` header. Every response your server sends includes this header, and both the browser and the CDN read it.

```text
Cache-Control: public, max-age=86400
```
- `public` — this response can be cached by anyone: the browser, a CDN, a proxy.
- `max-age=86400` — keep it for 86,400 seconds (24 hours). After that, the cache must ask the origin for a fresh copy.

```text
Cache-Control: private, no-store
```
- `private` — only the user's own browser can cache this. CDN edges must not store it (used for personalised responses).
- `no-store` — do not cache at all, not even in the browser. Every request must go to the origin. Use this for sensitive data (banking pages, admin panels).

```text
Cache-Control: public, s-maxage=3600, max-age=60
```
- `s-maxage=3600` — the CDN (shared cache) keeps it for 1 hour. The `s-` prefix means "shared cache".
- `max-age=60` — the user's browser only caches it for 60 seconds.
- This lets you cache aggressively at the CDN edge while keeping the browser copy fresh enough to pick up changes sooner.

The practical rule: set `max-age` for how long the content is valid. Use `s-maxage` when you want CDN and browser to have different TTLs. Use `private` or `no-store` to block CDN caching.


### Cache Invalidation

Cache invalidation is one of the hardest problems in computer science — once the CDN has cached a response, how do you force it to use the new version when content changes?

**TTL expiry** — do nothing and wait. The CDN holds the cached copy until `max-age` expires, then fetches fresh content. This is the simplest approach but means users may see stale content for the full TTL window. If your CSS changes and `max-age=86400`, users see the old CSS for up to 24 hours.

**Versioned URLs (cache-busting)** — instead of `/static/main.css`, deploy as `/static/main.a3f92c.css` where `a3f92c` is a hash of the file contents. The URL changes every time the file changes, so the CDN treats it as a brand-new resource and fetches it immediately. The old URL stays cached harmlessly — nobody requests it anymore. This is how every modern build tool (Vite, Webpack) works by default. You can set `max-age` to a year or more because the URL will never be reused for different content.

```text
Deploy v1:  /static/main.a3f92c.css  → cached forever
Deploy v2:  /static/main.b91dc4.css  → new URL, fetched fresh
(old URL is never requested again — it just expires quietly)
```

**Manual purge** — call the CDN's API to immediately delete cached copies of specific paths, before the TTL expires. Every CDN provider supports this. Use it when content changes urgently and you cannot wait — a pricing error on a product page, a broken deploy, a news article with a critical correction. The downside: a sudden purge of many paths causes a spike of cache misses that all hit your origin simultaneously.

The recommended combination: use **versioned URLs for static assets** (never need purging) + **short TTLs for HTML/API responses** + **manual purge as a last resort** for emergencies.


### CDN for URL Shortener

This is a great concrete example of CDN applied to a non-obvious use case — redirects, not static files.

When someone visits `short.ly/x8kP2q`, your server responds with:

```text
HTTP/1.1 301 Moved Permanently
Location: https://www.example.com/articles/how-to-prepare...
Cache-Control: public, max-age=86400
```

A **301** means "this redirect is permanent — the destination will never change." Browsers and CDNs are allowed to cache 301s. This means:

```text
First visit:
  User → CDN edge (miss) → origin server → 301 response → CDN caches it

All subsequent visits (same edge location):
  User → CDN edge (hit) → 301 returned immediately
  Origin server is never contacted again
```

The redirect is served in ~5ms from the nearest edge node instead of ~100ms from your origin. For a URL that goes viral and gets 10 million clicks in an hour, your origin servers receive close to zero traffic — the CDN absorbs everything.

**301 vs 302 — the caching trade-off:**
- **301 Permanent** → browsers and CDNs cache it. Future clicks never hit your server. Great for performance, but if you ever need to change the destination URL, cached clients keep going to the old one.
- **302 Temporary** → browsers do not cache it. Every click reaches your server. Great if you want click analytics or need to be able to change the destination, but your servers must handle every redirect.

Most URL shorteners use **302** by default precisely because they want analytics (every click logged) and the flexibility to update links. You only switch to 301 if you are shutting down a link permanently and want the redirect to live in browsers and CDNs forever.


## 2.05 API Gateway & Rate Limiting


### API Gateway

In a microservices architecture, your backend is split into many independent services — a User Service, an Order Service, a Payment Service, and so on. Without an API Gateway, every client would need to know the address of each individual service and make separate requests to each. That is messy, insecure, and duplicates a lot of work.

An **API Gateway** is a single entry point that sits in front of all your services. Every client request — from your web app, mobile app, or third-party developer — hits the gateway first. The gateway then figures out which backend service should handle it and forwards the request there.

```text
Client (web / mobile / third-party)
  ↓
API Gateway  ←── one address for everything
  ├── checks authentication (is this user logged in?)
  ├── checks authorisation (is this user allowed to do this?)
  ├── applies rate limiting (has this user sent too many requests?)
  ├── routes the request → User Service / Order Service / Payment Service
  ├── transforms request/response (e.g. converts XML → JSON)
  ├── logs every request for monitoring
  └── terminates SSL (decrypts HTTPS here, forwards plain HTTP internally)
```

Each individual service does not need to implement authentication, rate limiting, or logging — the gateway handles all of that once, centrally. This keeps services small and focused on their own business logic.

Real examples: **AWS API Gateway**, **Kong**, **Nginx**, **Envoy**.


### Rate Limiting

Rate limiting sets a maximum number of requests a client is allowed to make within a given time window. If they exceed the limit, the gateway rejects further requests (usually returning `HTTP 429 Too Many Requests`) until the window resets.

Without rate limiting, a single bad actor — or even an accidental bug in a client — can send millions of requests and bring your entire system down.


#### DoS and DDoS — What They Are

**DoS (Denial of Service)** — an attack where a single machine floods your server with so many requests that it runs out of CPU, memory, or network bandwidth and cannot serve legitimate users anymore. Imagine someone writing a script that calls your API 100,000 times per second from one computer.

**DDoS (Distributed Denial of Service)** — the same concept, but the attacker uses thousands or millions of compromised machines (a "botnet") all sending requests simultaneously. Because the traffic comes from many different IP addresses, simply blocking one IP does nothing. DDoS attacks can generate millions of requests per second and take down large infrastructure. The 2016 Dyn attack used a DDoS to take down Twitter, Netflix, and Reddit simultaneously for hours.

Rate limiting alone cannot stop a large DDoS — that requires specialised mitigation services (Cloudflare, AWS Shield). But rate limiting does protect against accidental overload, scrapers, and smaller targeted attacks.


#### Why Rate Limit

- **Protect against DoS/DDoS** — caps the damage a single source can do even if you cannot stop it entirely
- **Prevent brute-force attacks** — without a limit, an attacker can try millions of password combinations on your `/login` endpoint; with a limit of 5 attempts per minute per IP, a brute-force attack becomes impractical
- **Stop scrapers** — rate limiting forces bots to slow down, making mass data extraction economically not worth it
- **Fair resource sharing** — prevent one heavy user from consuming so much capacity that other users experience slowdowns
- **Control costs** — if your API calls a paid third-party service (e.g. an AI model, an SMS provider), rate limiting prevents runaway usage from blowing up your bill


#### Common Rate Limiting Algorithms

| Algorithm | How it works | Pro | Con |
|---|---|---|---|
| Fixed Window | Divide time into fixed slots (e.g. each minute). Count requests in the current slot. Reset the count at the start of each new slot. | Simple to implement and understand | A burst can happen at the slot boundary: 100 requests at 00:59 + 100 at 01:00 = 200 requests in 2 seconds, both within limits |
| Sliding Window Log | Record the exact timestamp of every request. On each new request, count how many timestamps fall within the last N seconds. | Perfectly accurate, no boundary burst | Memory-intensive — must store a timestamp for every request |
| Sliding Window Counter | Keep counters for the current and previous window. Estimate the count using a weighted average based on how far into the current window you are. | Accurate and memory-efficient | Slight approximation (not perfectly exact) |
| Token Bucket | A bucket holds up to N tokens. Tokens refill at a fixed rate (e.g. 10/second). Each request consumes one token. If the bucket is empty, the request is rejected. | Allows controlled short bursts (uses accumulated tokens) while enforcing a long-term average rate | Slightly more complex to implement |
| Leaky Bucket | Requests enter a queue (the "bucket"). They are processed at a fixed constant rate. If the queue is full, new requests are dropped. | Output rate is perfectly smooth — never a burst reaching the backend | Adds queuing latency; a sudden spike fills the queue and drops requests |

**Token Bucket** is the most widely used in practice — AWS, Stripe, and most major APIs use it because it allows short bursts (which feel natural to users) while still enforcing a long-term rate ceiling.


#### Where to Store Rate Limit Counters

Rate limiting only works if the counter is shared across all your API Gateway instances. If you store the counter in memory on each server, a user can bypass the limit by splitting requests across servers.

**Redis** is the standard solution — it is in-memory (fast), and its `INCR` command is atomic (incrementing a counter is a single safe operation with no race conditions).

```text
Key:   rate_limit:{userId}:{window}   e.g. rate_limit:user_123:2026-07-01T14:00
Value: number of requests made so far in this window
TTL:   duration of the window (e.g. 60 seconds) — Redis deletes the key automatically

Request arrives:
  1. INCR rate_limit:user_123:2026-07-01T14:00  → returns new count
  2. If count == 1, set TTL of 60s (first request of this window)
  3. If count > limit → return 429 Too Many Requests
  4. Otherwise → forward to the backend service
```

This works even with 100 API Gateway servers — they all talk to the same Redis, so the counter is always accurate.


---


# Part 3 — Data Storage


## 3.01 Database Fundamentals

Before looking at specific database types, some scaling techniques apply universally — to SQL databases, NoSQL databases, and everything in between. Understanding them as general concepts first avoids the common misconception that they are SQL-only.


### Replication

Replication copies data from a **primary** (write) node to one or more **replica** (read) nodes automatically and continuously.

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

Why do this?
- **Scale reads** — instead of every read query hitting the primary, you spread them across replicas. If your system is 90% reads (very common), this multiplies your read capacity by the number of replicas.
- **High availability** — if the primary crashes, you promote a replica to primary. Downtime is measured in seconds instead of hours.
- **Isolate heavy queries** — analytics or reporting queries (slow, full-table scans) run on a replica so they do not block fast production queries on the primary.

The key trade-off is **replication lag**: replicas are slightly behind the primary — typically milliseconds, but can be seconds under heavy load. If a user writes a record and immediately reads it back, they might hit a replica that has not received the write yet and see stale data. For reads that must see the latest write (e.g. reading your own profile right after updating it), always route to the primary.

This works the same across database types:
- **PostgreSQL / MySQL** — streaming replication, replica nodes
- **MongoDB** — replica sets (same primary/replica model)
- **Cassandra** — writes go to multiple nodes simultaneously based on a replication factor (e.g. RF=3 means every write is stored on 3 different nodes)
- **Redis** — Redis Sentinel / Redis Cluster replicate data to replicas
- **DynamoDB** — AWS replicates automatically across 3 availability zones, invisible to you


### Sharding (Horizontal Partitioning)

Sharding splits the database into multiple **shards** — completely independent instances, each holding a subset of the data. No single machine holds all the data.

```text
All users:
  user_id 1, 4, 7 ... → Shard 0  (its own server, its own disk)
  user_id 2, 5, 8 ... → Shard 1  (its own server, its own disk)
  user_id 3, 6, 9 ... → Shard 2  (its own server, its own disk)
```

A **shard key** is the field used to decide which shard a record belongs to. The application (or a routing layer) hashes the key to determine the target shard.

Choosing a good shard key is critical:
- It must have **high cardinality** (many distinct values) — `user_id` is good, `country` is bad (only ~200 countries, very uneven distribution)
- It must distribute data **evenly** — you do not want one shard holding 80% of the data

**Problems sharding creates:**
- **Cross-shard queries** — if you need data that lives on different shards, you must query both and merge results in application code. JOINs across shards are impossible in SQL; in NoSQL you simply avoid cross-partition queries by design.
- **Rebalancing** — when you add a new shard, you must move data from existing shards to the new one. This is complex and risky.
- **Hot shards** — if one user generates 90% of traffic (e.g. a celebrity), their shard becomes a bottleneck while others are idle.

How different databases handle it:
- **SQL (PostgreSQL, MySQL)** — sharding is not built in. You implement it yourself at the application layer or use a proxy (e.g. Vitess for MySQL). It is painful because SQL JOINs break across shards. Treat it as a last resort — try replication, caching, and indexing first.
- **MongoDB** — built-in auto-sharding via a `mongos` router. You pick a shard key per collection; the router handles distribution transparently.
- **Cassandra** — partitioning (Cassandra's word for sharding) is the default and fundamental model. Every row is distributed across nodes based on the partition key. Designed for this from day one.
- **DynamoDB** — AWS handles sharding transparently and automatically. You never see or configure it.


### Connection Pooling

Opening a new database connection is expensive: it involves a TCP handshake, authentication, and memory allocation on both the client and server. If your app opens a new connection for every request, the database quickly runs out of resources.

A **connection pool** maintains a fixed set of pre-opened connections that are reused across requests. When a request needs the database, it borrows a connection from the pool, uses it, and returns it.

```text
Without pooling:
  1,000 concurrent requests → 1,000 connections → database OOM crash

With pooling (pool size = 50):
  1,000 concurrent requests → 50 connections → 950 requests wait briefly
  → database stays healthy
```

This applies to any database accessed over a network:
- **PostgreSQL / MySQL** — **HikariCP** (Java/Spring Boot default), **PgBouncer** (standalone pooler for PostgreSQL), **c3p0**
- **MongoDB** — the official driver manages a connection pool automatically (configurable via `maxPoolSize`)
- **Redis** — clients like `ioredis` (Node.js) and `Jedis` (Java) maintain a connection pool internally


## 3.02 SQL at Scale


### When to Choose SQL

A SQL (relational) database stores data in tables — rows and columns, like a spreadsheet — and lets you query it with the SQL language. Relationships between tables are expressed through foreign keys (e.g. an `orders` table has a `user_id` column that references the `users` table).

SQL is the right default for most systems because:
- Data has a clear, stable structure and relationships between entities
- You need ACID transactions — operations that must either fully succeed or fully fail (payments, bookings, inventory where partial writes are dangerous)
- You need complex queries with JOINs across multiple tables
- Consistency is more important than raw write throughput

Examples: **PostgreSQL**, **MySQL**, **Amazon RDS**.

"At scale" means: what do you do when a single database server can no longer keep up — either because there are too many reads, too many writes, or too much data to fit on one machine? The general techniques (replication, sharding, connection pooling) are covered in 3.01. Below are the SQL-specific tools.


### Indexing at Scale

An index is a separate data structure (usually a B-tree) that the database maintains alongside the table. It maps the values of a column to the row locations that contain each value — like the index at the back of a book.

Without an index on `email`, finding a user by email requires scanning every row in the table. With an index, it is a direct lookup — O(log n) instead of O(n).

Key rules:
- **Index columns in WHERE, JOIN ON, and ORDER BY** — these are the columns the database filters and sorts on
- **Avoid low-cardinality columns** — an index on a boolean `is_active` column (only two values: true/false) barely helps; the database still scans half the table
- **Composite index column order matters** — an index on `(user_id, created_at)` helps the query `WHERE user_id = 5 ORDER BY created_at`, but NOT a query with only `WHERE created_at = ...` (the first column must be filtered first)
- **Too many indexes kills write performance** — every INSERT, UPDATE, or DELETE must also update all indexes on that table. A table with 10 indexes pays 10× the write overhead.


## 3.03 NoSQL at Scale


### What is a NoSQL Database?

"NoSQL" stands for "Not Only SQL" — it is not a single technology but a broad family of databases that do not follow the relational model. They were created starting in the late 2000s by companies like Google, Amazon, and Facebook to solve problems that SQL databases were not well suited for at internet scale: hundreds of millions of users, petabytes of data, and write volumes that a single primary node simply could not absorb.

A SQL database assumes your data fits neatly into tables with rows and columns, that relationships between entities are expressed through foreign keys, and that you need to enforce a strict schema (every row must have the same columns with the correct types). These assumptions are great for financial data, inventory, or anything with clear structure — but they become constraints when your data is messy, highly varied, or needs to be written to many machines simultaneously.

NoSQL databases relax or remove one or more of these assumptions to gain other properties: flexibility, write speed, or the ability to distribute data across thousands of machines from the start.


### SQL vs NoSQL — The Key Differences

| | SQL (Relational) | NoSQL |
|---|---|---|
| **Data model** | Tables, rows, columns | Varies: documents, key-value, columns, graphs |
| **Schema** | Strict — defined upfront, migrations needed to change it | Flexible — each record can have different fields |
| **Relationships** | Foreign keys, JOINs across tables | Typically embedded data or application-side joins |
| **Transactions** | Full ACID (all-or-nothing across multiple tables) | Varies — often single-document or single-record only |
| **Scaling** | Vertical first; horizontal is complex (sharding is hard) | Designed for horizontal scaling from the start |
| **Query power** | Very rich — complex JOINs, aggregations, subqueries | Limited — query only by predefined keys or indexes |
| **Consistency** | Strong by default | Often eventual consistency for higher availability |

The most important practical difference is **schema flexibility vs query power**. SQL gives you the ability to ask any question against your data (any JOIN, any filter, any aggregation) because the structure is known and enforced. NoSQL gives you the ability to store data in whatever shape it arrives and write it to many machines fast — but you have to know your access patterns upfront, because your ability to query arbitrary fields is limited.


### When to Choose NoSQL

NoSQL is the right choice when:
- Your data has **variable or evolving structure** — user profiles where different users have completely different fields, product catalogues with different attributes per category
- You need **massive write throughput** — millions of events per second (IoT sensors, activity logs, click streams) that a single SQL primary cannot absorb
- You need **horizontal scaling from day one** — the system must grow across many machines and cannot afford the complexity of manually sharding SQL
- Your access patterns are **simple and predictable** — you always look up by user ID, always fetch a session by token, always retrieve messages by conversation ID. NoSQL is optimised for this pattern; SQL is optimised for flexible querying.
- You are storing data structures **SQL handles awkwardly** — deeply nested JSON, graphs of relationships, sparse attributes

NoSQL is the wrong choice when:
- You need **complex queries with JOINs** across multiple entities — SQL is far better here
- You need **multi-record ACID transactions** — e.g. transferring money between two accounts (debit one, credit other) atomically
- Your data has **clear, stable structure** — a well-defined schema is an asset, not a constraint

In most systems, **SQL and NoSQL coexist**: SQL for the core business data (users, orders, payments) where correctness matters most, and NoSQL for specific use cases where its strengths shine (Redis for caching and sessions, Cassandra for activity logs, Elasticsearch for search).

There is no single "NoSQL" — it is a category with four fundamentally different types.


### Key-Value Stores

The simplest possible data model: a **key** maps to a **value**. Think of it like a giant dictionary or HashMap. There are no columns, no schema, no relationships — just a key and whatever blob of data you put under it.

```text
SET  user:session:abc123  →  {"userId": 5, "role": "admin", "expiresAt": "..."}
GET  user:session:abc123  →  {"userId": 5, "role": "admin", "expiresAt": "..."}
DEL  user:session:abc123
```

You can only look up by exact key — no filtering, no range queries, no JOINs.

**When to use:** anything that is looked up by a single identifier and does not need complex querying. Sessions, cache entries, rate limit counters, feature flags, leaderboard scores.

**Redis** — in-memory, sub-millisecond latency. The most common cache. Also supports richer data structures (lists, sets, sorted sets) and pub/sub. Data is lost on restart unless persistence is configured.

**DynamoDB** — managed by AWS, durable, scales to any load automatically. Used when you need key-value at petabyte scale with durability guarantees.


### Document Stores

Store data as **documents** — JSON-like objects with nested fields and arrays. Unlike SQL, documents in the same collection can have different fields (schema-free). There is no need to define a table structure upfront.

```json
{
  "_id": "user_001",
  "name": "Beatriz",
  "email": "beatriz@example.com",
  "address": {
    "city": "Lisbon",
    "country": "Portugal"
  },
  "tags": ["premium", "beta-tester"]
}
```

You can query on any field, filter nested fields, and run aggregation pipelines (similar to GROUP BY in SQL). JOINs across collections are possible but expensive — the preferred approach is to embed related data inside the document.

**When to use:** user profiles, product catalogues, blog posts, CMS content, anything with variable or evolving structure.

**MongoDB** — the most popular document store. 
**Firestore** (Firebase) — popular for mobile/web apps with real-time sync.


### Wide-Column Stores

Store data in tables with rows, but columns are **flexible and sparse** — different rows in the same table can have completely different sets of columns, and there can be thousands of columns per row. Data is grouped into **column families** and sorted by a partition key.

The key design principle: **model your data by the query you will run**, not by the entities in your domain. Cassandra cannot do arbitrary WHERE clauses — the partition key determines which node holds the data, and the clustering key determines the sort order within that node.

```text
Table: messages (partitioned by conversation_id, sorted by sent_at)
  conversation_id=conv_001, sent_at=10:00  → "Hey!"
  conversation_id=conv_001, sent_at=10:01  → "How are you?"
  conversation_id=conv_001, sent_at=10:02  → "I'm good!"

Query: all messages in conv_001 after 10:00 → instant, no scan needed
```

**When to use:** time-series data (IoT sensor readings every second), activity logs, chat message history — anything written at very high volume with simple, predictable read patterns.

**Apache Cassandra** — the most widely used wide-column store, built by Facebook and adopted at scale by Netflix, Apple, and Instagram. Every node is equal (no master), any node can accept reads and writes, and data is automatically replicated across multiple nodes. Tables are designed around queries — you choose a partition key (which nodes hold the data) and a clustering key (sort order within a partition). You can only query efficiently by those keys, which forces you to model your data for the specific access patterns you need upfront. Full deep-dive in 5.02.

**HBase** — similar model, runs on top of Hadoop, used for large analytical workloads.


### Graph Databases

Store data as **nodes** (entities) and **edges** (relationships between entities). Both nodes and edges can have properties (key-value pairs).

```text
(Beatriz) --[FOLLOWS]--> (João)
(Beatriz) --[FOLLOWS]--> (Maria)
(João)    --[FOLLOWS]--> (Maria)

Query: "Who does Beatriz follow who also follows Maria?"
→ trivial in a graph DB, complex in SQL (multiple JOINs)
```

Graph databases are optimised for traversing relationships — following edges from node to node. In SQL, finding "friends of friends" requires a self-JOIN on the friends table for each degree of separation, which becomes extremely slow. In a graph DB, it is a single traversal.

**When to use:** social networks (followers, connections), recommendation engines ("users who bought X also bought Y"), fraud detection (finding rings of connected suspicious accounts), knowledge graphs.

**Neo4j** — the most popular graph database, uses the Cypher query language. 
**Amazon Neptune** — managed graph database on AWS.


## 3.04 Caching


### What is a Cache?

A cache is a fast, temporary storage layer that saves the result of an expensive operation so it can be returned instantly next time without repeating the operation.

The expensive operation is usually a database query (10–100ms). The cache lives in memory (Redis), so returning a cached result takes ~1ms — 10 to 100 times faster.

The fundamental trade-off: **speed vs freshness**. A cached value may be stale — it reflects the state of the database at the time it was cached, not necessarily right now.


### Cache Hit and Miss

```text
Cache hit:  request arrives → check cache → found → return immediately (~1ms)
Cache miss: request arrives → check cache → not found
              → query database (~10–100ms)
              → store result in cache (for future requests)
              → return result
```

The goal is to maximise the **hit rate** (% of requests served from cache). A 90% hit rate means 9 out of 10 requests never touch the database.


### Where to Cache

There are multiple layers where caching can happen, each with different scope:

```text
Browser cache        → HTTP responses stored on the user's device
                        (images, CSS, JS — no server request at all)

CDN edge cache       → responses cached geographically close to users
                        (public content served in <10ms from nearby node)

Application cache    → Redis or Memcached sitting between your app and DB
                        (the most common server-side cache layer)

Database buffer pool → the database itself caches recently read pages in RAM
                        (automatic, managed by the database engine)
```


### Caching Strategies

#### Cache-Aside (Lazy Loading)
The most common pattern. The **application** is responsible for reading from and writing to the cache.

```text
Read path:
  1. Application checks cache: GET user:123
  2. Cache hit  → return cached value immediately
  3. Cache miss → SELECT * FROM users WHERE id=123
               → store in cache: SET user:123 {data} EX 3600
               → return data

Write path:
  UPDATE users SET name='Beatriz' WHERE id=123
  DEL user:123   ← invalidate the cache entry
```

The cache only contains what has actually been requested — no wasted memory on data nobody reads. First request for any key always misses (cold cache on startup). If you update the DB without invalidating the cache, readers see stale data until TTL expires.


#### Write-Through
Every write goes to the **cache and the database at the same time**, synchronously. The write is not considered complete until both succeed.

```text
UPDATE users SET name='Beatriz' WHERE id=123
  → SET user:123 {new data} in cache   ← happens simultaneously
  → UPDATE in database                 ← both must succeed
```

The cache is always in sync with the database. Reads always hit the cache. Every write is slower because it must update two places. Cache fills with data that might never be read again (every write goes to cache even if nobody reads that key).


#### Write-Behind (Write-Back)
Writes go to the **cache only** first. The cache asynchronously flushes changes to the database in the background.

```text
UPDATE users SET name='Beatriz' WHERE id=123
  → SET user:123 {new data} in cache  ← instant, returns to caller
  → [background worker flushes to DB a few seconds later]
```

Extremely fast writes — the caller does not wait for the database. Risk: if the cache crashes before flushing, those writes are lost forever. Only use when you can tolerate some data loss (e.g. view counts, non-critical counters).


#### Read-Through
The application only ever talks to the cache. On a miss, the **cache itself** is responsible for loading the data from the database — the application never queries the database directly.

```text
Application → cache.get("user:123")
  → if hit:  return cached value
  → if miss: cache queries DB, stores result, returns it
             (application does not know or care — it only talked to the cache)
```

Simplifies application code (one data access point), but adds a layer of abstraction that can be harder to debug.


### Cache Eviction Policies

Caches have limited memory. When the cache is full and a new item must be stored, something must be removed to make space. The eviction policy decides what gets removed:

| Policy | What it removes | When to use it |
|---|---|---|
| **LRU** (Least Recently Used) | The item that was last accessed the longest time ago | General purpose — the assumption is that items not accessed recently are less likely to be needed soon |
| **LFU** (Least Frequently Used) | The item with the fewest total accesses | When access patterns are heavily skewed — a few items are accessed millions of times, most items rarely. LFU keeps the "hot" items. |
| **FIFO** (First In First Out) | The oldest item regardless of access | Simple but rarely optimal — an old item that is accessed constantly gets evicted just because it was added first |
| **TTL-based** | Items whose time-to-live has expired | Session tokens, OTP codes, rate limit counters — anything that naturally expires |

Redis defaults to **LRU** and also supports **LFU**. You configure the policy with `maxmemory-policy`.


### Cache Stampede (Thundering Herd)

Imagine 10,000 users are viewing the same popular product page. The page is cached. The cache entry expires at midnight. At 00:00:00, all 10,000 in-flight requests simultaneously get a cache miss and fire 10,000 database queries at the same moment. The database, normally shielded by the cache, gets overwhelmed.

Solutions:
- **Mutex/locking** — only one request is allowed to query the database; the other 9,999 wait. When the first returns, it populates the cache and the others are served from it.
- **Probabilistic early expiry** — before the TTL expires, with some probability, start refreshing the cache in the background. The cache never actually "expires" for all users at once.
- **Background refresh** — a scheduled job proactively refreshes popular cache entries a few seconds before they expire. Users never see a miss.


### What NOT to Cache

- **Per-user personalised data** — if the cached response is different for every user, there is no sharing benefit. Each user would have their own unique cache entry, consuming memory without helping anyone else.
- **Security-sensitive data** — passwords, private keys, session secrets. If the cache is compromised, you do not want credentials exposed.
- **Data that must always be current** — bank balances mid-transaction, stock availability at checkout. A stale cache here causes real financial errors.


### Redis — How It Works

Redis (Remote Dictionary Server) is the standard application cache in modern systems. It is an **in-memory data store** — all data lives in RAM, which is why reads and writes take under 1 millisecond. You interact with it through simple commands over a TCP connection.

**How it fits into your architecture:**

```text
Your application server
  ↓  1. Check Redis first
Redis (in-memory, ~1ms)
  ↓  cache miss only
Your database (on disk, ~10–100ms)
  ↓  store result back in Redis for next time
```

Your application always checks Redis first. On a cache hit, it returns immediately without touching the database. On a miss, it queries the database, stores the result in Redis with a TTL, and returns it. The next request for the same key hits Redis.


**Key commands:**

```text
SET user:123 '{"name":"Beatriz","email":"b@example.com"}' EX 3600
  → stores a value under the key "user:123", expires after 3600 seconds (1 hour)

GET user:123
  → returns the stored value, or (nil) if the key does not exist or has expired

DEL user:123
  → deletes the key immediately (used to invalidate the cache on update)

INCR rate:user:123:2024-06-24
  → atomically increments a counter by 1 (used for rate limiting, view counts)

EXPIRE user:123 3600
  → sets or resets the TTL on an existing key

TTL user:123
  → returns how many seconds until the key expires (-1 = no expiry, -2 = does not exist)
```


**Data structures — Redis is not just key-value strings:**

Redis supports several data structures, each suited to a different use case:

| Structure | What it is | Use case |
|---|---|---|
| **String** | A single value (text, number, or binary) | Cached JSON responses, counters, feature flags |
| **Hash** | A map of field→value pairs inside one key | Storing a user object where you can update individual fields without rewriting the whole thing |
| **List** | An ordered sequence (push/pop from either end) | Activity feeds, job queues, recent history |
| **Set** | An unordered collection of unique values | Tracking unique visitors, tags, members of a group |
| **Sorted Set** | Like a Set but each member has a numeric score, sorted by it | Leaderboards, priority queues, rate limiting windows |

Example — a leaderboard with Sorted Sets:
```text
ZADD leaderboard 1500 "user:beatriz"   → add Beatriz with score 1500
ZADD leaderboard 2300 "user:joao"      → add João with score 2300
ZADD leaderboard 900  "user:maria"     → add Maria with score 900

ZREVRANGE leaderboard 0 2 WITHSCORES  → top 3 players
→ 1) "user:joao"    2300
   2) "user:beatriz" 1500
   3) "user:maria"    900
```

Example — rate limiting with INCR and EXPIRE:
```text
INCR requests:user:123:minute:14:35   → increment request count for this minute
EXPIRE requests:user:123:minute:14:35 60  → key disappears after 60 seconds
GET requests:user:123:minute:14:35    → if > 100, reject the request
```


**Persistence — does Redis lose data on restart?**

By default, yes — Redis is in-memory only. If the process crashes, all data is lost. This is fine for a cache (you just warm it back up from the database). But if you are using Redis for something that must survive restarts (rate limit counters, session tokens), you configure persistence:

- **RDB (Redis Database Backup)** — takes a snapshot of all data every N seconds and writes it to disk. Fast to restart from, but can lose the last few seconds of writes.
- **AOF (Append Only File)** — logs every write command to a file. On restart, Redis replays the log to rebuild state. More durable, slightly slower.

Most production deployments use **AOF + replication** for important data, and no persistence for pure cache data.


**Redis vs Memcached:**

Memcached is an older, simpler cache that only supports plain string key-value pairs. Redis supports multiple data structures, TTLs, persistence, pub/sub messaging, and Lua scripting. The only reason to choose Memcached today is if you need multi-threaded writes at extreme scale — Redis is single-threaded per command, though this is rarely a bottleneck in practice. For all new systems, default to Redis.


**Redis Cluster — scaling Redis itself:**

A single Redis node has a memory limit (the size of the machine's RAM). When your cache data exceeds that, or when write throughput becomes a bottleneck, you scale with Redis Cluster. Data is automatically split across multiple nodes using hash slots (16,384 slots distributed across nodes), and the cluster handles routing. Each node also has replicas for high availability.

```text
Redis Cluster (3 primary nodes + 3 replicas):
  Node A: slots 0–5460      + Replica A'
  Node B: slots 5461–10922  + Replica B'
  Node C: slots 10923–16383 + Replica C'

SET user:123 → hashes to slot 4832 → goes to Node A
SET user:456 → hashes to slot 7891 → goes to Node B
```


## 3.05 Object Storage


### What is Object Storage?

Object storage (also called **Blob storage** — Binary Large OBject) is a way to store large files cheaply and durably. A file is stored as an "object" identified by a unique key (path), along with some metadata (content type, size, creation date).

It is not a file system — there is no real folder hierarchy, just a flat namespace with key-like paths (`photos/user-123/avatar.jpg`). It is not a database — you cannot query or filter objects by their content. You can only upload, download, or delete by key.

It is designed for one thing: storing large, immutable binary files cheaply and reliably at massive scale.

Examples: **Amazon S3 (Simple Storage Service)**, **Azure Blob Storage**, **Google Cloud Storage**.


### How It Works

```text
Upload:   HTTP PUT s3://my-bucket/photos/user-123/avatar.jpg  (sends the binary file)
Download: HTTP GET s3://my-bucket/photos/user-123/avatar.jpg  (returns the binary file)
Delete:   HTTP DELETE s3://my-bucket/photos/user-123/avatar.jpg

Objects are identified by:
  bucket name  +  object key  →  s3://my-bucket/photos/user-123/avatar.jpg
```

Each object also carries metadata: `Content-Type: image/jpeg`, `Content-Length: 2048576`, custom user-defined tags.


### Why Not Store Files in a Database?

A common beginner mistake is storing file content as a binary column (`BLOB`) in a SQL database. This causes serious problems at scale:

- **Databases are optimised for small, structured rows** — storing a 10MB image in a row bloats every operation on that table (backups, replication, scans all have to move that 10MB)
- **Replication becomes expensive** — every replica must copy all the file data over the network
- **No CDN integration** — a CDN works by caching a file at an edge server so it can be served from a URL (e.g. `https://cdn.example.com/photos/avatar.jpg`). For that to work, the file must be accessible via a public HTTPS URL that the CDN can fetch and cache. A file stored in S3 has exactly that — `https://my-bucket.s3.amazonaws.com/photos/avatar.jpg` — so you just point the CDN at it. A file stored as a binary column inside a database row has no URL at all. To serve it, your API server must receive the request, run `SELECT file_data FROM files WHERE id=123`, receive the binary blob, and stream it back to the client. Every image load hits your database and your server. You cannot cache this at a CDN edge node, so every user in every country goes all the way to your origin server every time.
- **Cost** — database storage is ~$0.10–0.30/GB/month; S3 is ~$0.02/GB/month — 5–15× cheaper

The correct pattern: store the file in Amazon S3 (Simple Storage Service), store only the S3 key in the database (`s3_key: "photos/user-123/avatar.jpg"`).


### Common Pattern: Pre-Signed URLs

Never upload files through your API server — for a 100MB video, your server would be blocked for the entire upload duration, multiplied by every concurrent upload.

A **pre-signed URL** is a temporary, time-limited URL that grants direct access to a specific S3 object without requiring the client to have AWS credentials. Your server generates it and hands it to the client.

```text
1. Client → POST /api/upload-url  (asks your server for permission to upload)
2. Server → generates pre-signed S3 PUT URL (valid for 15 minutes, scoped to one key)
3. Server → returns { "uploadUrl": "https://s3.amazonaws.com/bucket/key?X-Amz-Signature=..." }
4. Client → HTTP PUT directly to S3 using that URL  (your server is not involved)
5. S3 → stores the file
6. S3 → emits an event (S3 Event Notification → SQS → your worker)
7. Worker → marks file as "ready" in your database, triggers post-processing
```

Your API servers never touch the file data. Uploads scale independently of your application.


## 3.06 Search Engines


### When Do You Need a Search Engine?

A SQL database with an index can find `WHERE email = 'beatriz@example.com'` instantly. But full-text search — finding all products whose description *contains* the word "bluetooth" — requires scanning every row and checking the text, even with indexes. This is called a **full table scan** and becomes unbearably slow on millions of rows.

Use a dedicated search engine when you need:
- **Full-text search** — "find all articles containing 'distributed systems'" — not an exact match, but a word contained anywhere in the text
- **Fuzzy search** — match "serach" to "search" (typo tolerance)
- **Relevance ranking** — most relevant results first, not just any match
- **Faceted filtering** — filter a product catalogue by brand AND colour AND price range simultaneously, showing how many results exist per option


### How Search Engines Work — The Inverted Index

A regular database index maps a row ID to its column value. A search engine builds the opposite — an **inverted index** that maps each word to all the documents that contain it.

```text
Documents:
  doc1: "The quick brown fox jumps"
  doc2: "The lazy fox slept"
  doc3: "Quick brown rabbits jump"

Inverted index built at write time:
  "brown"  → [doc1, doc3]
  "fox"    → [doc1, doc2]
  "jumps"  → [doc1]
  "lazy"   → [doc2]
  "quick"  → [doc1, doc3]
  "slept"  → [doc2]

Query "fox":
  → look up "fox" in index → [doc1, doc2] → instant, no scanning needed

Query "quick fox":
  → look up "quick" → [doc1, doc3]
  → look up "fox"   → [doc1, doc2]
  → intersection    → [doc1]  ← doc1 contains both words
```

Building the index is done at write time (when a document is added). Querying is O(1) — a direct lookup in the index.


### Elasticsearch

The most widely used search engine in production. Built on Apache Lucene (an open-source search library). You send documents to it as JSON, it builds the inverted index for you, and exposes a query API.

**Key concepts:**

- **Index** — the equivalent of a database table. A collection of related documents. You might have an index called `products` that holds all your product catalogue documents, and another called `articles` for blog posts.
- **Document** — a single JSON object stored in an index. This is what you are searching. Each document has fields (e.g. `title`, `description`, `price`, `tags`).
- **Mapping** — the schema of an index. It tells Elasticsearch how to treat each field:
  - `text` fields are **analysed** — they are broken into individual words (tokens), lowercased, and stripped of punctuation before being added to the inverted index. Searching `"wireless headphones"` will match a document containing `"Premium Wireless Headphones"`.
  - `keyword` fields are stored as-is, for exact matches and filtering (e.g. `status: "published"`, `category: "electronics"`).
  - `date`, `integer`, `float` fields are stored as their type and support range queries (`price between 50 and 100`).
- **Shard** — Elasticsearch distributes an index across multiple machines by splitting it into shards. Each shard is a self-contained Lucene index living on one node. A search query runs in parallel across all shards and results are merged. This is how Elasticsearch scales to billions of documents — add more nodes, spread the shards.
- **Replica shard** — a copy of a shard on a different node. If a node dies, its replica on another node takes over. Replicas also serve read queries, increasing search throughput.

```text
Cluster of 3 nodes, index split into 3 primary shards + 1 replica each:

  Node 1: Shard 0 (primary)  |  Shard 1 (replica)
  Node 2: Shard 1 (primary)  |  Shard 2 (replica)
  Node 3: Shard 2 (primary)  |  Shard 0 (replica)

Query → fan out to all 3 primary shards in parallel → merge results → return
```

**How it fits into your architecture:**

Elasticsearch is never your primary database. Your SQL or NoSQL database remains the source of truth — it handles writes, transactions, and durability. Elasticsearch holds a **searchable copy** of the data, kept in sync via a pipeline:

```text
Your DB (source of truth — always write here first)
  ↓  sync via Change Data Capture (CDC) or a message queue (Kafka/RabbitMQ)
Elasticsearch index (secondary store, built for search)
  ↓
Search query → returns matching document IDs + relevance scores
  ↓
Optionally fetch full documents from DB using the IDs
```

**Change Data Capture (CDC)** is a technique where you listen to the database's write log (e.g. PostgreSQL's WAL — Write Ahead Log) and emit an event for every insert, update, or delete. A connector (e.g. Debezium) picks up those events and writes them to Elasticsearch. This way your search index stays in sync automatically without changing your application code.

Because the sync is asynchronous, Elasticsearch is **eventually consistent** with your database — there is a small delay (usually under a second) between a record being saved to the DB and it appearing in search results. This is almost always acceptable for search.

**Relevance scoring** — when you search for `"wireless headphones"`, Elasticsearch does not just return all matching documents, it ranks them. Documents where the search term appears in the title score higher than documents where it only appears in a long description. The more times the term appears, the more rare the term is across all documents, the shorter the document — all of these affect the score. The default algorithm is BM25, a well-proven ranking formula. You can boost specific fields (e.g. a match in the title counts 3× more than a match in the description).

Other options: **Apache Solr** (older, more complex, same Lucene core), **Typesense** (simpler, modern, easier to self-host), **Algolia** (fully managed SaaS — zero infrastructure, very fast, but expensive at scale).


---


# Part 4 — Communication Patterns


## 4.01 APIs — REST vs GraphQL vs gRPC


### REST

REST (Representational State Transfer) is the dominant API style for web services. It uses standard HTTP verbs to perform operations on **resources** — things in your system like users, orders, products.

Each resource has a URL, and you use the HTTP verb to say what to do with it:

```text
GET    /users/123        → read user 123 (no side effects, safe to cache)
POST   /users            → create a new user (body contains the data)
PUT    /users/123        → replace user 123 entirely (body = new full object)
PATCH  /users/123        → partially update user 123 (body = only changed fields)
DELETE /users/123        → delete user 123
```

REST is **stateless** — each request must contain everything the server needs to process it. The server stores no memory of previous requests. This is what makes REST scalable: any server can handle any request because there is no session state tied to a specific machine.

**Over-fetching** — the response contains more data than you need. `GET /users/123` returns the full user object (name, email, address, preferences, avatar URL, created date...) even if you only wanted to display the name on screen. The extra data wastes bandwidth, especially on mobile.

**Under-fetching** — one request is not enough to get all the data you need. To show a user's profile with their recent posts, you need: `GET /users/123` then `GET /users/123/posts` — two round trips. Each adds latency.

REST is the right default for public APIs, webhooks, and any service where broad client compatibility matters.


### GraphQL

GraphQL is a query language where the **client specifies exactly what data it needs** — no more, no less — in a single request.

```graphql
query {
    user(id: "123") {
        name
        posts(limit: 5) {
            title
            createdAt
        }
    }
}
```

This single request returns the user's name and their 5 most recent post titles and dates. Nothing else. No over-fetching (only requested fields), no under-fetching (user and posts in one round trip).

All queries go to a single endpoint: `POST /graphql`. The request body is the query itself.

Good for:
- **Mobile clients** — bandwidth is expensive and limited; requesting only needed fields matters
- **Complex data with many relationships** — a dashboard that needs data from users, orders, products, and analytics in one page load
- **BFF (Backend For Frontend)** — a GraphQL layer that aggregates multiple backend services and lets each client (web, iOS, Android) request exactly what it needs

Bad for:
- **N+1 query problem** — imagine you request a list of 100 users and their posts. GraphQL resolves this in two steps: first it runs 1 query to fetch the 100 users, then for each user it runs a separate query to fetch that user's posts — 100 more queries. Total: 1 + 100 = 101 queries to the database, hence "N+1" (N = the number of users). This is a problem because 101 database round trips is much slower and more expensive than 1. The fix is **DataLoader**: instead of firing a query per user the moment it is needed, DataLoader collects all the user IDs that were requested during that same tick and fires a single batched query at the end — `SELECT * FROM posts WHERE user_id IN (1, 2, 3, ... 100)` — returning everything in one round trip.
- **Caching is harder** — REST GET requests are cacheable by URL. All GraphQL requests are POST to the same URL — standard HTTP caches cannot distinguish them.
- **Rate limiting complexity** — a single GraphQL query can request a huge amount of nested data. Rate limiting by request count is not enough; you need to limit by query complexity.


### HTTP/1.1 vs HTTP/2

Before understanding gRPC, it helps to understand why HTTP/2 was created.

**HTTP/1.1** (from 1997, still what most REST APIs use) has a fundamental limitation: each request must be fully completed before the next one can start on the same TCP connection. This is called **head-of-line blocking** — if request A is slow, requests B and C are stuck waiting behind it, even if they have nothing to do with A.

```text
HTTP/1.1 — one request at a time per connection:
  Connection 1:  [Request A ────────────────] [Request B ────] [Request C ──]
  (B and C are blocked until A finishes)

  Workaround: browsers open 6 parallel TCP connections per domain
  → 6 connections × setup overhead × increased server load
```

**HTTP/2** (2015) solved this with **multiplexing**: multiple requests and responses can be in flight simultaneously over a single TCP connection, completely independently. Each message is split into small **frames** and interleaved on the wire. A slow response does not block a fast one.

```text
HTTP/2 — multiple streams over one connection:
  Single connection:
    Stream 1: [Request A frame] [Request A frame] [Response A frame] ...
    Stream 3: [Request B frame] [Response B frame] ...
    Stream 5: [Request C frame] [Response C frame] ...
  (all interleaved, no blocking)
```

Other HTTP/2 improvements:
- **Header compression (HPACK)** — HTTP/1.1 sends headers as plain text on every request (including cookies, auth tokens, user-agent — often 500–800 bytes per request). HTTP/2 compresses headers and remembers which headers were already sent, avoiding repetition.
- **Server push** — the server can proactively send resources the client will need before it asks (e.g. send the CSS and JS files alongside the HTML response). Less common in practice.
- **Binary framing** — HTTP/1.1 is plain text (human-readable). HTTP/2 is binary, which is faster to parse and more compact.

HTTP/2 is fully backwards compatible — the same HTTPS connection negotiates the version automatically. You do not change your URLs or request structure; the browser and server handle it transparently.

**Why does this matter for gRPC?** gRPC requires HTTP/2 specifically because it relies on multiplexing to support bidirectional streaming — both client and server can send streams of messages simultaneously over a single connection. HTTP/1.1 cannot do this.


### gRPC

gRPC is a high-performance communication framework developed by Google. Instead of REST's HTTP + JSON, it uses **HTTP/2 + Protocol Buffers (protobuf)**.

You define your API in a `.proto` file — a language-neutral contract:

```protobuf
service UserService {
    rpc GetUser (GetUserRequest) returns (User);
    rpc StreamUsers (StreamRequest) returns (stream User);  // server streaming
}

message GetUserRequest { int64 user_id = 1; }
message User {
    int64 id = 1;
    string name = 2;
    string email = 3;
}
```

From this file, gRPC auto-generates client and server code in your language. You call `userService.getUser({userId: 123})` in your code — it looks like a local function call but executes over the network.

**Protobuf** is a binary format. Instead of human-readable JSON (`{"name":"Beatriz","email":"b@example.com"}`), it encodes data as compact binary bytes. Protobuf messages are typically 3–10× smaller than equivalent JSON and much faster to serialise/deserialise.

**HTTP/2** enables multiplexing — many requests over a single TCP connection simultaneously, and native bidirectional streaming (both client and server can send messages at any time).

Good for:
- **Service-to-service communication** inside a microservices system — fast, typed contracts, auto-generated clients
- **Streaming** — a server can push a continuous stream of data to the client (e.g. real-time price feed)
- **Performance-critical internal APIs** — lower latency and bandwidth than REST+JSON

Not good for: public APIs or browser clients. Browsers cannot make raw gRPC calls — they require a translation proxy (`grpc-web`).


### Comparison

| | REST | GraphQL | gRPC |
|---|---|---|---|
| Protocol | HTTP/1.1 or HTTP/2 | HTTP/1.1 | HTTP/2 only |
| Message format | JSON (text, human-readable) | JSON (text) | Protobuf (binary, compact) |
| Client controls response shape | No — server decides | Yes — client specifies fields | No — server decides |
| Streaming | Not natively | Subscriptions (WebSocket) | Native (server, client, bidirectional) |
| Browser support | Full, universal | Full | Requires grpc-web proxy |
| HTTP caching | Easy (GET requests) | Hard (all POSTs) | Hard |
| Best for | Public APIs, webhooks | Mobile apps, complex data | Internal microservices |


## 4.02 Message Queues & Event-Driven Architecture


### The Problem with Direct Service Calls

In a synchronous architecture, Service A calls Service B directly over HTTP and waits:

```text
Order Service → HTTP POST → Email Service → waits for response
```

Problems:
- If the Email Service is slow, the Order Service is blocked for the duration
- If the Email Service crashes, the Order's request is lost permanently
- If 10,000 orders arrive in a spike, the Email Service gets 10,000 simultaneous requests and falls over

A **message queue** breaks this direct coupling:

```text
Order Service → [Queue] → Email Service
```

The Order Service drops a message into the queue and continues immediately — it does not wait. The Email Service reads from the queue at its own pace, independently. If Email Service crashes and restarts, messages are still in the queue waiting.


### What "Decoupling" Means

Decoupling means two services do not need to know about each other or be running at the same time. The Order Service does not know the Email Service exists — it just puts an "order placed" event on the queue. Any service that cares about that event can subscribe to it.

```text
"order.placed" event published once by Order Service
  ↓           ↓           ↓
Email      Inventory   Analytics
Service    Service     Service
(send      (reduce     (track
 receipt)   stock)      conversion)
```

Adding a new downstream action (e.g. a new Fraud Detection service) requires zero changes to the Order Service. This is the **fan-out** pattern.


### Core Concepts

- **Producer** — the service that creates and sends messages (e.g. Order Service)
- **Consumer** — the service that reads and processes messages (e.g. Email Service)
- **Queue** — holds messages until a consumer reads them. Each message is consumed by one consumer.
- **Topic** — like a named channel; multiple different consumer groups can subscribe to the same topic and each gets its own copy of every message
- **Message** — the unit of data passed through the queue, usually a JSON object
- **Dead Letter Queue (DLQ)** — if a message fails to process after N retries (e.g. the Email Service throws an exception every time), it is moved to the DLQ instead of being lost or blocking the queue. A developer can inspect the DLQ later and fix the issue.


### When to Use a Message Queue

- **Async processing** — user uploads a video; the API returns "upload received" immediately; a background worker encodes it over the next 10 minutes
- **Decoupling services** — order placed → fan out to email, inventory, analytics independently
- **Load levelling** — a flash sale generates 50,000 orders in 10 seconds. The queue absorbs the spike; the downstream services process at a steady rate of 500/second without falling over
- **Retry on failure** — if processing fails, the message stays in the queue and is retried automatically (with backoff)


### Apache Kafka — How It Works

Kafka was created at LinkedIn in 2011 to handle their activity feed — hundreds of billions of events per day (page views, clicks, searches, likes). It is now the industry standard for high-throughput event streaming, used at Netflix, Uber, Airbnb, and most large-scale systems.

The core model: Kafka is a **distributed commit log**. Think of it as an immutable, append-only sequence of records that is retained on disk for a configurable period (hours, days, weeks). Unlike a traditional queue where messages disappear after being consumed, Kafka keeps every message and lets any consumer read it at any time.

**Topics and Partitions:**

A **topic** is a named stream of events — like a category or channel. You produce to a topic and consume from a topic. Examples: `orders`, `user-signups`, `payment-events`.

A topic is split into **partitions** — separate, ordered sequences of messages distributed across different Kafka broker nodes. Partitions are how Kafka scales: more partitions means more parallelism.

```text
Topic "orders" with 3 partitions spread across 3 broker nodes:

  Broker 1 → Partition 0:  [order#1] [order#4] [order#7] [order#10] ...
  Broker 2 → Partition 1:  [order#2] [order#5] [order#8] [order#11] ...
  Broker 3 → Partition 2:  [order#3] [order#6] [order#9] [order#12] ...
                             ↑
                         oldest                               newest →
                     (append-only, immutable)
```

Within a partition, messages are strictly ordered. Across partitions, there is no global order guarantee. If you need all messages for a specific entity (e.g. all orders from user 42) to be ordered and processed together, you set the **partition key** to `user_id` — Kafka hashes the key and always routes messages with the same key to the same partition.

**Offsets — how consumers track their position:**

Each message in a partition has a sequential number called an **offset** (0, 1, 2, 3...). Consumers track which offset they have read up to. This is stored in a special Kafka topic called `__consumer_offsets`.

```text
Partition 0:  [0: order#1] [1: order#4] [2: order#7] [3: order#10] ...

Email Service consumer group:     currently at offset 3 (has processed up to order#10)
Analytics consumer group:         currently at offset 1 (is behind, processing order#4)
New Audit consumer (just added):  starts at offset 0   (reads from the very beginning)
```

Each **consumer group** has its own independent offset. Adding a new consumer group never affects existing ones — they each maintain their own position in the log. This is fundamentally different from a traditional queue where a message disappears once any consumer reads it.

**Producers — writing to Kafka:**

A producer sends a message to a topic, optionally with a key. Kafka writes it to the end of the appropriate partition and immediately returns — the producer does not wait for consumers.

```text
Producer (Order Service):
  kafka.produce(topic="orders", key="user_42", value={orderId: 999, amount: 49.99})
  → hashed key routes to Partition 1
  → appended at offset 7
  → producer gets back: {partition: 1, offset: 7}
  → continues immediately (fire and forget, or with ack confirmation)
```

**Consumers and Consumer Groups — reading from Kafka:**

A **consumer group** is a set of consumer instances that together consume a topic. Kafka automatically assigns partitions to consumers in the group — each partition is consumed by exactly one consumer in the group at a time. This enables parallel processing.

```text
Topic "orders" — 4 partitions, Consumer Group "email-service" with 2 instances:

  Consumer Instance A → reads Partition 0 and Partition 1
  Consumer Instance B → reads Partition 2 and Partition 3

Scale to 4 instances:
  Consumer Instance A → reads Partition 0
  Consumer Instance B → reads Partition 1
  Consumer Instance C → reads Partition 2
  Consumer Instance D → reads Partition 3

Scale to 5 instances:
  Consumers A–D → each handle one partition
  Consumer E    → idle (more consumers than partitions = no benefit)
```

The maximum parallelism of a consumer group equals the number of partitions. This is why choosing the right number of partitions upfront matters — you cannot easily reduce it later.

**Retention — messages are not deleted after consumption:**

Kafka retains messages on disk for a configurable time (e.g. 7 days) or until a size limit is reached. During that window, any consumer can read any message at any offset. This enables:
- **Replay** — if a bug corrupted your database, reset the consumer offset to a point before the bug and reprocess all events
- **New consumers** — a new analytics pipeline can start from the beginning and process all historical events
- **Audit log** — every event that ever happened in your system is stored and queryable

**Replication — fault tolerance:**

Each partition has a configurable number of replicas distributed across broker nodes. If the broker holding the partition leader crashes, a replica on another broker is promoted to leader automatically — no data loss, minimal downtime.

```text
Partition 0 — replication factor 3:
  Broker 1: leader replica  (accepts writes and reads)
  Broker 2: follower replica (syncs from leader)
  Broker 3: follower replica (syncs from leader)

Broker 1 crashes → Broker 2 is elected new leader → no data lost
```

**Throughput:**

Kafka achieves millions of messages per second per broker through several design choices:
- **Sequential disk writes** — appending to the end of a file is the fastest possible disk operation (no random I/O)
- **Zero-copy transfer** — messages go from disk to network without being copied into application memory
- **Batching** — producers and consumers send/receive batches of messages, not one at a time
- **Compression** — messages can be compressed (snappy, gzip, lz4) before being sent


### Kafka vs RabbitMQ

**RabbitMQ** is a traditional **message broker** — messages are routed to queues, consumed once, and deleted. There is no replay.

| | Kafka | RabbitMQ |
|---|---|---|
| Model | Persistent log, consumers track their own offset | Traditional queue, messages deleted after ACK |
| Replay old messages | Yes — consumers can seek to any offset | No — message is gone after consumption |
| Throughput | Millions of messages/second | Tens of thousands/second |
| Ordering | Guaranteed within a partition | Guaranteed within a queue |
| Best for | Event streaming, audit logs, analytics, replay needed | Task queues, background jobs, RPC |


### Delivery Guarantees

What happens if a consumer crashes mid-processing?

- **At-most-once** — the message is acknowledged before processing. If the consumer crashes after ACK but before finishing, the message is lost. Fastest, but data loss is possible. ("fire and forget")
- **At-least-once** — the message is acknowledged only after processing completes. If the consumer crashes before ACK, the message is re-delivered and processed again. No data loss, but duplicates are possible. Your consumer must be **idempotent** — processing the same message twice must produce the same result as processing it once. (e.g. use `INSERT ... ON CONFLICT DO NOTHING` instead of bare `INSERT`)
- **Exactly-once** — guaranteed to be processed exactly once, never lost, never duplicated. Extremely hard to achieve in distributed systems; Kafka Transactions approximates it with significant complexity.

In practice, **at-least-once with idempotent consumers** is the standard. It is safe, reliable, and achievable.


## 4.03 WebSockets & Real-Time Communication


### The Problem with HTTP for Real-Time

Standard HTTP is **request-response**: the client always initiates, the server always replies, and then the connection closes. If the server needs to push data to the client (a new chat message arrives, a stock price changes, a friend comes online), it cannot — the client must ask first.

Workarounds before WebSockets:
- **Polling** — client asks every 2 seconds "is there anything new?" — wastes bandwidth, adds latency, hammers the server with requests even when nothing changed
- **Long polling** — client asks and the server holds the request open until it has something to say (or a timeout). Better than polling but still uses a full HTTP request per message cycle


### WebSockets

WebSockets provide a **persistent, full-duplex** connection. Full-duplex means both sides can send messages to each other simultaneously and independently — like a phone call, where both people can talk at the same time (unlike HTTP, which is more like walkie-talkies where only one side transmits at a time).

The connection starts as HTTP and is then "upgraded":

```text
1. Client sends:
   GET /ws HTTP/1.1
   Host: chat.example.com
   Upgrade: websocket
   Connection: Upgrade
   Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==

2. Server responds:
   HTTP/1.1 101 Switching Protocols
   Upgrade: websocket
   Connection: Upgrade

3. The TCP connection is now a WebSocket connection.
   Both sides can send messages ("frames") at any time.
   The connection stays open until either side closes it.
```

Good for: real-time chat, live notifications, collaborative editing (Google Docs), live sports scores, multiplayer games, financial dashboards with live prices.

Not good for: simple request-response (REST is simpler and more cacheable), mobile clients in the background (a permanent open connection drains battery).


### Scaling WebSockets

A normal HTTP server is stateless — any server can handle any request. WebSockets break this: a client is permanently connected to one specific server. If you scale to 10 servers, User A is on Server 1 and User B is on Server 3, and they need to exchange messages.

```text
Problem:
  User A → connected to Chat Server 1
  User B → connected to Chat Server 3
  User A sends "Hello" to User B
  Chat Server 1: "I have no connection to User B. Where is User B?"

Solution — shared pub/sub layer (Redis Pub/Sub):
  Chat Server 1 → PUBLISH channel:user_B  "Hello"
  Chat Server 3 → SUBSCRIBED to channel:user_B → receives "Hello" → pushes to User B
```

Every chat server subscribes to channels for all its connected users. When a message arrives for a user on a different server, the pub/sub layer routes it there.


### Server-Sent Events (SSE)

SSE is a lighter alternative to WebSockets for cases where you only need the server to push data to the client — not the other way around.

The concept: the client makes one normal HTTP request and keeps the connection open. The server never closes it — it just keeps writing new data down the wire whenever something happens. From the client's perspective, it is like downloading a file that never ends, with new lines appearing over time as events occur.

```text
Normal HTTP:      Client asks → Server answers → connection closes
WebSocket:        Client ↔ Server  (both can send at any time, persistent)
SSE:              Client asks once → Server keeps pushing → client only listens
```

Because SSE is just a regular HTTP response that never ends, it works over HTTP/1.1 without any protocol upgrade. The browser also handles reconnection automatically — if the connection drops, it reconnects on its own.

**Good for:** notification feeds, live dashboards, progress updates, any scenario where the server needs to push updates but the client does not need to send anything back (or can send via a separate regular HTTP request).

**Not good for:** chat or any feature where the client also needs to push messages in real time — use WebSockets for that.


### Long Polling

Long polling is the oldest trick for simulating server push using plain HTTP. It predates both WebSockets and SSE and was widely used before they existed (e.g. early Gmail, early Facebook chat).

The concept: the client sends a request, but instead of answering immediately, the server holds it open and waits — doing nothing — until it has something new to say. When new data arrives, the server sends the response and closes the connection. The client immediately makes a new request, and the cycle repeats.

```text
Regular polling (bad):
  Client asks every 2 seconds → "anything new?" → server: "no" → "no" → "no" → "yes, here it is"
  → wastes many requests asking for nothing

Long polling (better):
  Client asks → server holds the request open for up to 30 seconds
  → if something arrives: server responds → client immediately asks again
  → if nothing arrives (timeout): server responds with "nothing" → client asks again
```

Compared to regular polling it is more efficient because the client is not asking repeatedly for nothing — the server waits until there is something to say. But it is still inefficient compared to WebSockets or SSE because every single event delivery requires a full HTTP round trip (connection setup, headers, response, teardown).

**Good for:** nothing in new systems — only use it as a last resort fallback when WebSockets and SSE are not available (very old browsers, restrictive corporate proxies that block persistent connections).

**Not good for:** high message volume or modern systems where WebSockets or SSE are available.


---


# Part 5 — Reliability & Scalability


## 5.01 Scalability


### Vertical Scaling (Scale Up)

Increase the power of a single machine — more CPU cores, more RAM, faster NVMe SSD.

```text
Before: 1 server, 4 cores, 16 GB RAM  → handles 100 req/s
After:  1 server, 32 cores, 256 GB RAM → handles 800 req/s
```

**Pro:** Zero application changes required. No distributed systems complexity — one machine, one process, simple debugging. Latency between components is nanoseconds (in-process function calls, not network).

**Con:** Physical limit — the largest available machine can handle a fixed maximum. Single point of failure — one machine crashing takes everything down. Very expensive at the top end. Upgrading usually requires a maintenance window.

Vertical scaling is the right first response to load. Before adding distributed complexity, ask: "Can I just use a bigger machine?" For many applications, the answer is yes.


### Horizontal Scaling (Scale Out)

Add more machines and spread load across them behind a load balancer.

```text
Before: 1 server
After:  10 servers, each handling 1/10 of traffic
```

**Pro:** Theoretically unlimited — add more machines as load grows. Fault tolerance — one machine dying takes out 10% of capacity, not 100%. Cost-efficient — many small commodity machines often cost less than one giant machine.

**Con:** Applications must be stateless (see below). Distributed systems introduce new failure modes. Data must be shared across machines — consistency is harder.


### Stateless vs Stateful Services

A service is **stateless** if it stores no data between requests on the server itself. Every request contains everything the server needs to handle it. Any of the 10 machines can process any request from any user.

```text
Stateless (correct):
  Request includes: Authorization: Bearer eyJhbGciOiJ...  (JWT token)
  Any server validates the token and knows the user — no shared state needed

Stateful (problem):
  Server 1 stores: { session_id: "abc", user: "Beatriz", cart: [...] }
  If the next request goes to Server 2 — it has no session, the user is "logged out"
  Solution (bad): sticky sessions — force the same user to always hit the same server
  Solution (good): move sessions to Redis — all servers share one session store
```

The rule for horizontal scaling: **push all state out of the application servers** into shared external stores — sessions to Redis, uploaded files to S3, data to a database. Application servers become identical, stateless, disposable.


Authentication is the most common place where stateless vs stateful matters in practice:

**Session-based auth (stateful):**
The server creates a session after login and stores it in memory (or Redis). It sends back a session ID in a cookie. On every request, the client sends the cookie, the server looks up the session ID in its store, and retrieves who the user is.

```text
Login:   client sends credentials → server creates session {user: "Beatriz", role: "admin"}
         → stores it server-side → sends back cookie: session_id=abc123

Request: client sends cookie: session_id=abc123
         → server looks up "abc123" in Redis → finds {user: "Beatriz", role: "admin"}
         → processes request
```

The server must look up every request in the session store. If the session is only in one server's memory (not Redis), another server cannot find it — the user appears logged out.


**Token-based auth (stateless) — JWT:**
The server creates a signed token after login and sends it to the client. The token itself contains the user's identity (encoded inside it). On every request, the client sends the token, and any server can verify it independently — no lookup needed, because the information is in the token itself.

```text
Login:   client sends credentials → server creates JWT token:
         header.payload.signature
         payload = {"userId": 5, "role": "admin", "exp": 1719878400}
         signed with a secret key only the server knows
         → sends token to client

Request: client sends: Authorization: Bearer eyJhbGciOiJIUzI1...
         → any server verifies the signature with the secret key
         → if valid, reads userId and role directly from the token
         → no database or Redis lookup needed
```

The signature makes it tamper-proof — a user cannot change `"role": "admin"` to `"role": "superadmin"` without invalidating the signature. The expiry (`exp`) is also embedded in the token, so it automatically stops working after that date.

JWT is stateless because the server stores nothing — all information travels with the request. This is why it scales horizontally: any of your 10 servers can validate any token independently.

**The problem with short-lived JWTs — and why refresh tokens exist:**

If a JWT never expires, a stolen token gives an attacker permanent access. If you set it to expire in 15 minutes, the user has to log in again every 15 minutes — terrible UX. The solution is two tokens:

- **Access token** — a short-lived JWT (15 minutes). Used on every API request. Short expiry limits the damage if stolen.
- **Refresh token** — a long-lived, opaque random string (7–30 days). Stored securely (httpOnly cookie). Only used for one purpose: getting a new access token when the current one expires.

```text
Login:
  Server issues: access_token (JWT, expires in 15 min)
               + refresh_token (random string, expires in 30 days, stored in DB)

Normal requests (access token still valid):
  Client → sends access_token → server validates → responds
  (no DB lookup)

Access token expires after 15 min:
  Client → sends refresh_token to POST /auth/refresh
  Server → looks up refresh_token in DB → still valid?
         → issues a new access_token (15 min) + optionally rotates refresh_token
  Client → uses new access_token for next requests

User logs out:
  Server → deletes refresh_token from DB
  → even if the old access_token is still in the 15-min window, it cannot be renewed
```

The refresh token is stored in the database, which is the only stateful part of this flow. This is intentional — it gives the server control: if a user's account is compromised, you delete their refresh token and they cannot get new access tokens after the current one expires (at most 15 minutes of exposure).


### Auto-Scaling

Instead of manually adding servers when load spikes, cloud platforms can do it automatically.

You define rules: "when average CPU > 70% for 3 minutes, add 2 servers; when CPU < 20% for 10 minutes, remove 1 server." The platform monitors the metric, provisions new instances (typically in 1–3 minutes), registers them with the load balancer, and deregisters them when the load drops.

```text
Normal traffic:   3 servers running
Flash sale starts: CPU → 80% → auto-scale adds 7 servers → 10 running
Sale ends:         CPU → 15% → auto-scale removes 7 servers → 3 running
```

This handles traffic spikes without human intervention and reduces costs during quiet periods. It only works with stateless services — if servers store local state, you cannot just add or remove them freely.

Trigger metrics: CPU utilisation, requests per second, queue depth (for worker services), memory usage.


## 5.02 CAP Theorem & Consistency Models


### The CAP Theorem

When you store data on multiple machines (replicas, shards), three desirable properties exist — and the CAP theorem proves you can only guarantee two of them simultaneously:

- **C — Consistency**: every read returns the most recent write. All nodes see the same data at the same time. No stale reads.
- **A — Availability**: every request gets a response (success or error). The system never refuses to answer.
- **P — Partition Tolerance**: the system continues to work even when the network between nodes breaks — i.e. some machines cannot talk to each other.

**Network partitions are unavoidable.** Cables get cut, switches fail, data centres lose connectivity. In any distributed system, P is non-negotiable — you must tolerate partitions or accept total failure. This reduces the real choice to: **CP or AP**.

**CP — Consistency + Partition tolerance:** During a network split, the system refuses requests rather than return potentially stale data. It would rather be unavailable than wrong.

Example: ZooKeeper (used for distributed coordination). If the cluster cannot confirm that all nodes agree on a value, it rejects the read. Correctness is paramount.

**AP — Availability + Partition tolerance:** During a network split, the system continues serving requests, but different nodes may return different (stale) values. It would rather give you something potentially old than say "I don't know."

Example: Cassandra. During a network partition, each partition of the cluster continues accepting reads and writes independently. When the partition heals, the nodes reconcile their differences (eventual consistency).

```text
CP systems: ZooKeeper, etcd, HBase — used for config, leader election, coordination
AP systems: Cassandra, DynamoDB, CouchDB — used for high-availability data stores
```

### ZooKeeper — CP in Practice

ZooKeeper is a distributed coordination service. It does not store your application data — it stores small, critical pieces of coordination state that distributed systems need to agree on: who is the current leader, what is the current configuration, which nodes are alive.

The problem it solves: in a distributed system, many nodes need to agree on things like "which node is the leader right now?" or "is this feature flag enabled?". You cannot store this in your application database, because the database itself might be the thing you are trying to coordinate. You need a separate, highly reliable source of truth that all nodes can read from.

```text
Without ZooKeeper — the split-brain problem:
  3 Kafka broker nodes, network partition splits them into two groups
  Group A (2 nodes): "We are the majority, Node 1 is the leader"
  Group B (1 node):  "I am the leader"
  → two leaders simultaneously → data corruption

With ZooKeeper:
  Only the group that can reach ZooKeeper can elect a leader
  Group B cannot reach ZooKeeper → steps down
  → exactly one leader at all times, guaranteed
```

**What ZooKeeper provides:**

- **Leader election** — when the current leader crashes, nodes use ZooKeeper to agree on exactly one new leader. No split-brain (two nodes both thinking they are the leader).
- **Distributed locks** — only one node at a time can acquire a lock to perform a critical operation (e.g. running a scheduled job that must not run twice simultaneously).
- **Configuration management** — store config (feature flags, connection strings, rate limit values) in ZooKeeper. All nodes watch the same key and are notified immediately when it changes — no restart needed.
- **Service discovery** — nodes register themselves in ZooKeeper when they start (`/services/payment/node-1 → 10.0.0.5:8080`). Other services look up the registry to find available instances.
- **Health monitoring** — ZooKeeper uses **ephemeral nodes**: a node registers itself and ZooKeeper automatically deletes its entry if the node crashes or disconnects. Other services watching that path are notified immediately.

**Why it is CP:**

ZooKeeper uses a consensus protocol (ZAB — ZooKeeper Atomic Broadcast) that requires a majority (quorum) of nodes to agree before any write is committed. If a network partition splits a 5-node ZooKeeper cluster into groups of 3 and 2, only the group of 3 can form a quorum and continue operating. The group of 2 stops responding — it becomes unavailable rather than risk returning inconsistent data. Correctness is more important than availability here, because the whole point of ZooKeeper is to be a reliable source of truth.

**etcd** is the modern alternative to ZooKeeper — same CP guarantees, simpler API, used by Kubernetes to store all cluster state (which pods are running, which nodes exist, what the desired configuration is).


### Cassandra — AP in Practice

Cassandra is the standard example of an AP system. Understanding why helps clarify the CAP trade-off.

Cassandra has no single leader — every node is equal and can accept writes independently. When a write arrives, Cassandra sends it to the nodes responsible for that data (determined by the partition key) and returns success as soon as a configurable number of them confirm (e.g. just 1 node with `CONSISTENCY ONE`, or the majority with `CONSISTENCY QUORUM`).

During a network partition, the nodes that cannot communicate with each other continue accepting writes independently — they do not stop and wait for consensus. When the partition heals, Cassandra reconciles the conflicting writes using **last-write-wins** (the write with the later timestamp survives).

```text
Network partition — Cassandra keeps going:
  Data centre A (3 nodes): accepts writes for users 1–500
  Data centre B (3 nodes): also accepts writes for users 1–500  ← same data, diverging

  Partition heals → nodes compare timestamps → latest write wins → converge
  → brief period of stale reads was acceptable; no downtime was not
```

This makes Cassandra the right choice when **availability cannot be sacrificed** — the system must keep accepting writes even during failures — and when the application can tolerate briefly stale reads or occasional last-write-wins conflicts. Examples: activity logs, sensor data, message history, counters. Wrong choice for: bank balances, inventory counts, anything where two conflicting writes would cause real damage.



### Consistency Models

The C in CAP is binary — but in practice, consistency is a spectrum:

**Strong consistency** — immediately after a write, every read from any node returns the new value. Achieved by writing synchronously to all replicas before acknowledging success. Most correct, most expensive (highest latency). 
Example: a single-node PostgreSQL or synchronous multi-master replication.

**Read-your-writes consistency** — you always see your own writes immediately, but other users might still see the old value for a short time. Practical middle ground: after updating your profile photo, you see the new one; your friends see it within a few seconds. 
Example: routing your reads to the primary just after a write.

**Eventual consistency** — all replicas will eventually converge to the same value, but during the propagation window, reads may return stale data. The system cannot tell you how long "eventually" is — it could be milliseconds or seconds. 
Example: Cassandra with default settings, DynamoDB, DNS propagation.

**Causal consistency** — if operation B depends on operation A (B reads the result of A), then B is guaranteed to see A's result. Unrelated operations can still be out of order. 
Example: "you commented on my post, and I can see my reply to your comment" — the reply must see the comment it replies to.


### PACELC

CAP is useful but incomplete — it only describes what happens when things go wrong (during a network partition). PACELC, proposed by Daniel Abadi in 2012, extends CAP to also describe the trade-off that exists even when everything is working normally.

The name is an acronym for the full decision tree:

```text
P  →  if there is a network Partition:
A      choose between Availability
C      or Consistency
E  →  Else (no partition, system is healthy):
L      choose between Latency
C      or Consistency
```

**The partition side (PAC) you already know from CAP:** during a failure, do you keep responding (AP) or do you refuse to risk inconsistency (CP)?

**The normal-operation side (ELC) is the new insight:** even when there are zero failures and all nodes are healthy, there is still a trade-off between speed and correctness.

Here is why: if you have 3 replicas and you want strong consistency, a write cannot be acknowledged until all 3 replicas confirm they stored it. Those 3 confirmations require network round trips — so every write waits for the slowest replica. If you want low latency instead, you acknowledge the write as soon as 1 replica stores it and let the other 2 sync in the background. Those 2 are now briefly behind — a reader hitting them right now sees stale data.

```text
Write to 3 replicas:

Strong consistency (high latency):
  Client → write → Replica 1 ✓
                 → Replica 2 ✓   ← wait for ALL three
                 → Replica 3 ✓
                 → "success" returned to client
  Any read from any replica → sees the latest write immediately

Low latency (eventual consistency):
  Client → write → Replica 1 ✓
                 → "success" returned to client immediately
                 → Replica 2 syncing... (background)
                 → Replica 3 syncing... (background)
  Read from Replica 2 right now → might return the old value
```

**How real databases position themselves on both axes:**

| Database | During partition | During normal operation |
|---|---|---|
| PostgreSQL (sync replication) | CP — refuses writes if replica unreachable | EC — waits for replicas, higher latency |
| Cassandra | AP — keeps accepting writes | EL — acknowledges after 1 node, low latency |
| DynamoDB | AP (default) | EL (default) / EC (strong consistency option) |
| ZooKeeper | CP — minority partition stops | EC — requires quorum before confirming |
| Redis (async) | AP | EL — acknowledges instantly, replicates async |

PACELC is useful in interviews because it forces you to think about performance under normal load, not just under failure. Most of the time your system is healthy — the ELC trade-off is the one your users feel every day.

In system design interviews, explicitly naming which consistency model you are choosing — and why — demonstrates mature thinking.



## 5.03 Availability & Fault Tolerance


### Availability Numbers

Availability is the percentage of time a system is operational and correctly serving requests. Expressed as a percentage of a year:

| Availability | Downtime / year | Downtime / month | What it means in practice |
|---|---|---|---|
| 99% | 3.65 days | 7.3 hours | Acceptable for internal tools |
| 99.9% ("three nines") | 8.76 hours | 43.8 minutes | Standard for many web services |
| 99.99% ("four nines") | 52.6 minutes | 4.4 minutes | High availability — requires redundancy at every layer |
| 99.999% ("five nines") | 5.3 minutes | 26 seconds | Telecom-grade — extremely expensive to achieve |

Going from three nines to four nines is not just 10× harder — it requires eliminating every single point of failure, running multi-AZ deployments, automated failover in seconds, and rigorous on-call processes. Most consumer internet products target 99.9%–99.99%.


### Single Points of Failure (SPOF)

A SPOF is any component whose failure brings the entire system down. In a system design interview, always scan your architecture for SPOFs and propose solutions:

**Single application server**
All requests go to one machine. If it crashes, runs out of memory, or needs a restart for a deploy, the entire product is down.
Solution: run multiple identical servers behind a load balancer. If one dies, the load balancer stops sending traffic to it and the others absorb the load. Deploys become rolling (one server at a time) — no downtime.

**Single database primary**
All writes go to the primary node. If it crashes, no write can succeed — orders cannot be placed, users cannot log in, any operation that changes data fails. Reads from replicas may still work, but the system is partially broken.
Solution: automatic failover. A monitoring agent (e.g. AWS RDS Multi-AZ, Patroni for PostgreSQL) detects that the primary is down and promotes the most up-to-date replica to primary within seconds, with no manual intervention.

**Single load balancer**
The load balancer sits in front of all your application servers — every request passes through it. If it goes down, no traffic reaches any server at all, even if every server behind it is perfectly healthy. A load balancer that was protecting against SPOFs is itself a SPOF.
Solution: run two load balancers in active-passive mode. Both share a **virtual IP address** (a floating IP that DNS points to). If the active one dies, the passive one claims the virtual IP in seconds — clients see no change because they are still connecting to the same IP.

**Single availability zone (AZ)**
A cloud availability zone is a physically separate data centre within a region — its own power supply, cooling, and network. AZ-level failures happen (power outages, cooling failures, network cuts). If all your servers are in one AZ and it goes down, your entire system goes down regardless of how many servers you have.
Solution: deploy your application servers and database replicas across at least 2–3 AZs within the same region. The load balancer distributes traffic across AZs. If one AZ fails, traffic is rerouted to the surviving AZs automatically. Most managed services (RDS, ElastiCache, EKS) offer multi-AZ as a checkbox option.

**Single region**
An entire cloud region going down is rare but has happened (AWS us-east-1 has had region-wide incidents). If your entire infrastructure is in one region, a regional outage takes everything down.
Solution: multi-region deployment — run your stack in two or more regions simultaneously, with data replicated between them and global DNS routing (e.g. AWS Route 53 latency-based or failover routing). This is extremely complex (cross-region data consistency, much higher cost, operational overhead) and is only justified for systems where even 30 minutes of downtime causes severe financial or safety consequences.


### Redundancy

Redundancy means having more components than strictly necessary, so that failures are absorbed without outage.

**Active-Active:** multiple identical instances all handle real traffic simultaneously. If one fails, the load balancer routes its traffic to the surviving instances. No failover delay — capacity just decreases.

```text
Server 1 ─┐
Server 2 ─┤─ Load Balancer ─ Users
Server 3 ─┘
(Server 2 dies → LB routes to Server 1 and 3 instantly)
```

**Active-Passive:** one primary instance handles traffic; a standby instance runs idle, monitoring the primary. If the primary fails, the standby is promoted and takes over. Failover takes seconds to minutes (detection + promotion + health check).

Active-Active is preferred because there is no delay and you get better resource utilisation. Active-Passive is simpler and used for components that are harder to run in parallel (e.g. database writes).


### Health Checks & Circuit Breakers

**Health checks** — every service exposes a `GET /health` endpoint that returns 200 OK when healthy and 503 when unhealthy. Load balancers and Kubernetes probe this every few seconds. An unhealthy instance is removed from rotation automatically — no manual intervention.

**Circuit breaker** — prevents one failing service from cascading failures to the entire system.

Without a circuit breaker: Service A calls Service B. Service B starts responding slowly (database issue). Service A waits. More requests pile up waiting. Service A's thread pool exhausts waiting for B. Service A fails. Services that call A also fail. The whole system falls over from one database hiccup — a **cascading failure**.

The circuit breaker pattern (named after the electrical safety device):

```text
CLOSED state (normal):
  A calls B → B responds → circuit stays closed

OPEN state (B is failing):
  After N consecutive failures, the circuit "trips" (opens)
  A no longer calls B — it immediately returns a fallback or error
  B gets no more traffic, giving it time to recover
  (like cutting power to prevent an electrical fire)

HALF-OPEN state (testing recovery):
  After a timeout, allow a small number of test requests through
  If they succeed → circuit closes (normal operation resumes)
  If they fail    → circuit opens again (wait longer)
```

Libraries: **Resilience4j** (Java), **Polly** (.NET).


### Graceful Degradation

When a dependency fails, do not let the whole system fail — return a reduced but still useful response.

Examples:
- Recommendation engine is down → show "Popular items" instead of personalised recommendations
- Review service is slow → show the product page without reviews (not a 500 error)
- Payment gateway is timing out → show "Your order is being processed" and retry asynchronously
- Search is unavailable → fall back to basic database filtering (slower but functional)

Graceful degradation is about defining: "What is the minimum useful thing I can show the user when this dependency fails?" Design those fallbacks explicitly, not as afterthoughts.


## 5.04 Microservices vs Monolith


### Monolith

A monolith is a single application where all functionality lives in one codebase, is built into one deployable artifact, and runs as one process.

```text
One codebase → one build artifact → one deployment → one running process
     ↕
One database
```

**Pros:**
- **Simple at small scale** — one thing to run, one thing to debug, one log to look at
- **No network overhead** — service A calling service B is a function call in the same process (nanoseconds), not an HTTP request (milliseconds)
- **Simple transactions** — all data is in one database; a single transaction can update users and orders and payments atomically with full ACID guarantees
- **Easy to test** — one integration test runs the whole system


**Cons:**
- **Scaling is all-or-nothing** — if the image processing feature is under load, you must scale the entire application, including all the parts that are idle
- **Deployment is all-or-nothing** — a one-line change to the footer requires redeploying the entire application; one broken test blocks the whole release
- **Fault isolation is zero** — a memory leak in the analytics feature crashes the entire process and takes down the whole product
- **Technology lock-in** — the whole application uses the same language and framework; you cannot use Python for ML and Java for the API


### Microservices

Microservices split the application into small, independently deployed services. Each service owns its own data and is responsible for one business domain.

```text
User Service       Order Service     Payment Service    Notification Service
     ↕                  ↕                  ↕                    ↕
  Users DB           Orders DB         Payments DB         (no own DB)
```

**Pros:**
- **Independent scaling** — the Order Service is under load? Scale only that. The User Service is idle — leave it as-is.
- **Independent deployment** — the Order Service can be deployed 50 times a day without touching the Payment Service
- **Fault isolation** — the Notification Service crashing does not affect order placement
- **Technology freedom** — ML service in Python, core API in Java, real-time service in Node.js


**Cons:**
- **Network calls fail** — every service-to-service call is a network request that can time out, fail, or be slow. A monolith's function calls never fail due to network issues.
- **No distributed transactions** — you cannot do `BEGIN TRANSACTION; update orders; update payments; COMMIT;` across two services with two databases. You need a **Saga** — a sequence of local transactions where each step publishes an event, and a compensating transaction undoes completed steps on failure.
- **Operational complexity** — 20 services to deploy, 20 services to monitor, 20 CI/CD pipelines, 20 sets of logs to search through, versioned APIs between services
- **Testing is harder** — an integration test must spin up all dependent services or use complex mocks



**Rule of thumb: start with a monolith.** Extract services when you have a specific, concrete reason — a module needs independent scaling, a team needs independent deployment, or a technology mismatch demands a separate service. Extracting prematurely creates distributed system complexity without the benefits.


### Conway's Law

"Any organisation that designs a system will produce a design whose structure is a copy of the organisation's communication structure." — Mel Conway, 1967

In plain English: your software architecture will naturally mirror how your teams are organised. If you have one team, you build a monolith. If you have separate teams for payments, orders, and users, you naturally build separate services for each — because each team owns their piece.

This is why microservices adoption often correlates with company growth. Small teams → monolith makes sense. Many teams needing to deploy independently → microservices start making sense.


### The Strangler Fig Pattern

The safest way to migrate from a monolith to microservices without a risky big-bang rewrite. Named after a fig tree that grows around a host tree, gradually replacing it.

```text
1. Build new features as microservices (do not add them to the monolith)
2. For existing features: extract them one at a time as microservices
3. Route traffic to the new service via the API Gateway
4. The old monolith code for that feature is deleted
5. Repeat until the monolith handles nothing
```

The monolith continues running and serving production traffic throughout. Each extraction is a small, safe, reversible step.


## 5.05 Monitoring & Observability


### The Three Pillars of Observability

Observability is the ability to understand what is happening inside your system from the outside — without having to add new code every time something goes wrong.

**Metrics** — numerical measurements collected over time and stored as time series. 
Examples: requests per second, error rate, p99 latency, CPU usage, memory usage, cache hit rate. Used for dashboards that show system health at a glance, and for alerts when something crosses a threshold.



**Logs** — structured records of discrete events. Every request, every error, every significant action is logged with a timestamp, request ID, user ID, and relevant context. Used for debugging: "what exactly happened for user X at 14:32:05?" Unlike metrics, logs are not aggregated — you can retrieve every single event.

Logs have **severity levels** that indicate how serious the event is. Every major logging library (Log4j, SLF4J, Winston, Python logging) uses the same standard levels, from least to most severe:

| Level | When to use it | Example |
|---|---|---|
| **TRACE** | Extremely fine-grained — every step inside a function. Only useful for deep debugging, never enabled in production (too verbose, huge volume). | "Entering method calculateDiscount(), input=49.99" |
| **DEBUG** | Detailed information useful during development or diagnosing a specific bug. Disabled in production by default, enabled temporarily when investigating an issue. | "Cache miss for user:123, querying database" |
| **INFO** | Normal, expected events that confirm the system is working as intended. The baseline level for production. | "User 123 logged in", "Order #999 placed successfully", "Server started on port 8080" |
| **WARN** | Something unexpected happened but the system recovered and continued working. It is not an error yet, but it might become one — worth investigating. | "Retry attempt 2/3 for payment gateway", "Database connection pool at 90% capacity", "Deprecated API endpoint called" |
| **ERROR** | An operation failed. The system handled the failure (no crash), but something that should have worked did not. Needs attention. | "Failed to send confirmation email for order #999", "Payment gateway returned 500", "Could not write to cache" |
| **FATAL / CRITICAL** | The application cannot continue. An unrecoverable error that typically causes the process to crash or shut down. Requires immediate action. | "Cannot connect to database on startup", "Out of memory, shutting down", "SSL certificate expired" |

In production, the typical configuration is to log **INFO and above** (INFO, WARN, ERROR, FATAL). TRACE and DEBUG are too verbose for production — a busy service can generate millions of log lines per minute, making storage expensive and searching slow. When debugging a specific issue, you temporarily lower the log level to DEBUG for the affected service and raise it back afterwards.

Logs should be **structured** (JSON format) rather than plain text strings — this makes them searchable and filterable:

```text
Plain text (hard to query):
  [2024-06-24 14:32:05] ERROR Payment failed for user 123 order 999 amount 49.99

Structured JSON (easy to filter by userId, orderId, level):
  {"timestamp":"2024-06-24T14:32:05Z","level":"ERROR","userId":123,
   "orderId":999,"amount":49.99,"message":"Payment failed","service":"order-api"}
```

Log aggregation tools (**Datadog**, **ELK Stack** — Elasticsearch + Logstash + Kibana, **AWS CloudWatch Logs**) collect logs from all your servers and services into one place, where you can search, filter by level or field, and set up alerts.



**Traces** — a distributed trace follows a single request as it travels through multiple services, recording the time spent in each:

```text
User request: GET /checkout
  API Gateway:          2ms
    Auth Service:       5ms
      Token validation: 3ms
    Order Service:      45ms   ← this is slow
      Inventory DB:     40ms   ← this is the culprit
    Payment Service:    12ms
  Total:                64ms
```

Without tracing, you know the request took 64ms. With tracing, you know exactly which service and which operation caused the slowness.

Distributed tracing tools: **Jaeger**, **Zipkin**, **AWS X-Ray**, **Datadog APM**.


### Understanding Percentile Latency (p50, p95, p99)

Average latency hides the truth. If 99 requests take 10ms and 1 request takes 10,000ms, the average is ~110ms — a mediocre number that conceals one disastrous request.

**Percentiles** tell you what percentage of requests complete within a given time:
- **p50** (median) — 50% of requests complete within this time. The "typical" user experience.
- **p95** — 95% of requests complete within this time. 5% are slower. The experience of users who hit slower paths.
- **p99** — 99% of requests complete within this time. 1% are slower. The worst 1 in 100 requests.



Example: `p50=10ms, p95=80ms, p99=2000ms`
- The typical user sees 10ms — great
- 5 in 100 users see > 80ms — acceptable
- 1 in 100 users sees > 2 seconds — this is your tail latency problem. Fix it before it becomes the majority experience at scale.

Always alert on p99 or p95, never on averages. A failing edge case can hide in the average for weeks.


### RED and USE Methods

**RED Method** — for monitoring services (APIs, microservices):
- **Rate** — how many requests per second is the service handling?
- **Errors** — what percentage of requests are returning errors (5xx, timeouts)?
- **Duration** — how long are requests taking? (p50, p95, p99)

**USE Method** — for monitoring infrastructure (servers, databases, queues):
- **Utilisation** — what percentage of capacity is being used? (CPU at 70%, disk at 80%)
- **Saturation** — is work queuing up because the resource is overwhelmed? (CPU run queue > 1 per core)
- **Errors** — are there hardware or software errors? (disk I/O errors, network packet drops)


### SLI, SLO, SLA

- **SLI (Service Level Indicator)** — a specific metric you measure: "p99 latency of the checkout endpoint over the last 5 minutes is 150ms"
- **SLO (Service Level Objective)** — the target you commit to internally: "p99 latency of checkout must be below 200ms, 99.9% of the time"
- **SLA (Service Level Agreement)** — a legal contract with a customer or partner that includes financial penalties if breached: "we guarantee 99.9% uptime; if we fall below, we issue a credit"

SLOs are your internal engineering standards. SLAs are what you sign with paying customers — typically set slightly lower than your SLO so you have headroom before a breach becomes contractual.


**Error budget** — the allowable amount of time you can breach your SLO. If your SLO is 99.9% uptime, your error budget is 0.1% of the month = 43.8 minutes. If you deploy a broken build and are down for 30 minutes, you have 13.8 minutes left before breaching the SLO. Engineering teams use error budgets to balance reliability work against new features.


### Alerting

Alerts fire when an SLO is at risk or breached. The goal is to wake someone up at 3am only when users are genuinely affected.

- **Actionable** — the alert must tell the on-call engineer what to do. An alert that says "CPU is at 70%" with no clear action is noise.
- **Urgent** — alert on symptoms, not causes. "Error rate is 5%" means users are failing now. "CPU is at 70%" might be fine — the system might be handling it. Fire alarms on symptoms (high error rate, high latency) and investigate causes (CPU, memory, dependencies) after waking up.
- **Accurate** — low false-positive rate. An alert that fires 10 times a week when nothing is actually wrong trains engineers to ignore it. Alert fatigue is when engineers start dismissing pages without investigating because "it is probably another false alarm" — and then miss the real incident.


## 5.06 Security

Security in system design is not about writing secure code line by line — it is about building a system where the architecture itself limits what damage can be done if something goes wrong. The principle underneath everything is **defence in depth**: assume any single layer can be breached, and design so that a breach of one layer does not compromise the whole system.


### Encryption

**In transit — HTTPS/TLS:**
Any data travelling over the network (between client and server, between services, between your app and your database) must be encrypted. TLS (Transport Layer Security) handles this — it encrypts the connection so that even if someone intercepts the packets, they cannot read the content.

- All public-facing endpoints must be HTTPS. HTTP is never acceptable for production.
- Internal service-to-service traffic should also use TLS (mutual TLS / mTLS), especially in a microservices architecture. Without it, an attacker who gains access to your internal network can read all inter-service communication.
- TLS certificates must be kept up to date. Expired certificates cause browsers to block access entirely. Use automated renewal (e.g. Let's Encrypt with auto-renewal, AWS Certificate Manager).


**At rest — encrypted storage:**
Data stored on disk — in databases, S3 buckets, backups — should be encrypted. If a hard drive is physically stolen or a storage bucket is accidentally made public, encrypted data is unreadable without the key.

- Most managed databases (RDS, DynamoDB, MongoDB Atlas) offer encryption at rest as a simple toggle — always enable it.
- S3 buckets: enable server-side encryption (SSE-S3 or SSE-KMS) and make sure no bucket is accidentally public. Many high-profile breaches have been caused by an S3 bucket left open.
- Backups must also be encrypted — an unencrypted backup of an encrypted database defeats the purpose.


**Key management:**
Encryption is only as strong as the key management. Keys must be stored separately from the data they encrypt. Use a dedicated key management service: **AWS KMS**, **Google Cloud KMS**, or **HashiCorp Vault**. Never hardcode encryption keys in source code.



### Authentication & Authorisation

**Authentication** — verifying who you are. Covered in detail in 5.01 (JWT + refresh tokens) and session-based auth. Key points:

- Always hash passwords with a slow, salted algorithm — **bcrypt** or **Argon2**. Never store plain-text or MD5/SHA-1 hashed passwords. If your database is breached, bcrypt hashes are computationally infeasible to crack at scale.
- Enforce **multi-factor authentication (MFA)** for admin and internal tools. A stolen password alone is not enough to log in.
- Short-lived access tokens (15 min JWT) + long-lived refresh tokens is the standard pattern for stateless auth.


**Authorisation** — verifying what you are allowed to do. Authentication says "this is Beatriz". Authorisation says "Beatriz is allowed to view this order but not delete it".


- **RBAC (Role-Based Access Control)** — users are assigned roles (admin, editor, viewer), and roles have permissions. Simple and auditable. Most systems start here.
- **ABAC (Attribute-Based Access Control)** — permissions are evaluated based on attributes of the user, resource, and environment ("user can edit this document if they are the owner AND it is not archived"). More flexible, more complex.
- Always enforce authorisation **server-side**. Never rely on the frontend hiding a button as the only access control — the API must validate every request independently.
- **Principle of least privilege**: every user, service, and process should have the minimum permissions needed to do its job. A read-only analytics service should have a read-only database user. A Lambda function that sends emails should only have permission to call SES, nothing else.


### Secrets Management

Secrets are API keys, database passwords, JWT signing keys, third-party credentials — anything that grants access to a resource.

**Never commit secrets to source code or version control.** Even in a private repository. Git history is forever, and repositories get leaked or accidentally made public. A secret committed once stays in git history even after deletion.


The correct approach:
- **Environment variables** — inject secrets at runtime via environment variables. The application reads in a .env file `process.env.DATABASE_URL` — the value is never in the code. Set them in your deployment platform (Kubernetes secrets, ECS task definition, Heroku config vars).
- **Secret managers** — for production systems, use a dedicated secrets store: **AWS Secrets Manager**, **HashiCorp Vault**, or **Google Secret Manager**. Your application fetches secrets at startup from the store. Secrets can be rotated automatically without redeploying the application.
- Rotate secrets regularly. If a key is compromised, you need to be able to revoke and replace it quickly.


### Network Security

**Private subnets:**
Not every component needs to be reachable from the internet. In a cloud VPC (Virtual Private Cloud), you split your network into public and private subnets:

```text
Internet
  ↓
Load Balancer  (public subnet — reachable from internet)
  ↓
Application servers  (private subnet — only reachable from the load balancer)
  ↓
Database  (private subnet — only reachable from the application servers)
```

Your database should never have a public IP address. The only machines that can reach it are your application servers, inside the same private network. An attacker on the internet cannot even attempt a connection.


**Security groups / firewall rules:**
A security group is a virtual firewall that controls which IPs and ports can send traffic to a resource. Apply the principle of least privilege here too:

- Database security group: only allow inbound connections on port 5432 (PostgreSQL) from the application server security group. Nothing else.
- Application server security group: only allow inbound on port 443 (HTTPS) from the load balancer. Block everything else.
- Never open port 22 (SSH) to `0.0.0.0/0` (the whole internet). Use a bastion host or AWS Systems Manager Session Manager for admin access.


**API security:**
- Rate limiting (covered in 2.05) protects against brute-force and DoS attacks.
- Validate and sanitise all input at the boundary — never trust data coming from a client. Unvalidated input is the root cause of SQL injection, XSS, and command injection vulnerabilities.
- Use parameterised queries / prepared statements for all database queries. Never concatenate user input into a SQL string.


### OWASP Top 10 — Most Common Vulnerabilities

The OWASP Top 10 is the standard list of the most critical web application security risks. Knowing them by name is expected in senior interviews:

| Vulnerability | What it is | Prevention |
|---|---|---|
| **Injection (SQL, command)** | Attacker inserts malicious code into a query or command via user input | Parameterised queries, input validation, never concatenate user input into SQL |
| **Broken Authentication** | Weak passwords, missing MFA, insecure session tokens | bcrypt passwords, MFA, short-lived JWT, secure cookie flags |
| **Sensitive Data Exposure** | Data transmitted or stored without encryption | HTTPS everywhere, encryption at rest, never log sensitive fields |
| **Broken Access Control** | Users can access resources or actions they should not | Server-side authorisation checks on every request, RBAC |
| **Security Misconfiguration** | Default credentials, open S3 buckets, unnecessary ports open, debug mode in production | Least privilege, automated config scanning, disable defaults |
| **XSS (Cross-Site Scripting)** | Attacker injects JavaScript into a page that runs in other users' browsers | Escape output, Content-Security-Policy header, avoid innerHTML with user data |
| **Insecure Direct Object Reference** | User changes an ID in a URL (/orders/123 → /orders/124) to access someone else's data | Always verify the requesting user owns the requested resource server-side |
| **CSRF (Cross-Site Request Forgery)** | A malicious site tricks a logged-in user's browser into making an unintended request to your API | CSRF tokens, SameSite cookie attribute, verify Origin/Referer headers |


### Security in System Design Interviews

When designing a system in an interview, proactively mention security at these points:

- **API layer** — HTTPS only, authentication required, rate limiting, input validation
- **Data layer** — encryption at rest, private subnet for the database, least-privilege DB user per service
- **Secrets** — no hardcoded credentials, use a secret manager
- **Admin access** — MFA required, audit log of all admin actions
- **Third-party integrations** — validate webhooks (check signatures), use scoped API keys with minimum permissions

You do not need to design a full security system unprompted, but flagging these concerns shows you think about production systems holistically, not just happy-path functionality.


## 5.07 Cloud & Infrastructure

When you design a system in an interview, you are almost always designing something that will run on a cloud platform. Understanding what the cloud provides — and what trade-offs each choice carries — is what separates a theoretical design from a practical one. You do not need to memorise every AWS service, but you do need to understand the categories, when to use managed vs self-hosted, and how cloud concepts like regions, AZs, and serverless affect your architecture decisions.


### IaaS, PaaS, SaaS — The Cloud Service Models

These three models describe how much of the infrastructure the cloud provider manages for you vs how much you manage yourself.

**IaaS — Infrastructure as a Service:**
The cloud gives you raw virtual machines (VMs), storage, and networking. You are responsible for everything above the hardware: the operating system, runtime, security patches, scaling logic, and your application.

```text
You manage:   Application, runtime, OS, middleware, security patches
Cloud manages: Physical hardware, virtualisation, network, power
Example: AWS EC2 (renting a virtual machine)
```

Maximum control, maximum responsibility. You can install anything, configure anything, but you also have to maintain everything.
 

**PaaS — Platform as a Service:**
The cloud manages the OS, runtime, and infrastructure. You deploy your application code and the platform handles the rest — scaling, patching, load balancing.

```text
You manage:   Application code and data
Cloud manages: OS, runtime, scaling, load balancing, patching
Examples: AWS Elastic Beanstalk, Google App Engine, Heroku, Vercel, Railway
```

Much simpler to operate, less control. Good for small teams or when you want to focus entirely on product rather than infrastructure.
 

**SaaS — Software as a Service:**
A fully managed application you use via a web interface or API. You configure it, you do not run it.

```text
You manage:   Configuration and data input
Cloud manages: Everything else
Examples: Gmail, Slack, Salesforce, Datadog, GitHub
```

In system design, you use SaaS tools as components in your architecture (e.g. Datadog for monitoring, SendGrid for email, Stripe for payments) rather than building those capabilities yourself.


### Regions and Availability Zones

Understanding the physical structure of the cloud is essential for designing reliable systems.

**Region** — a geographic area containing multiple data centres. Examples: `eu-west-1` (Ireland), `us-east-1` (North Virginia), `ap-southeast-1` (Singapore). Data stored in a region stays in that region (important for GDPR compliance — European user data must remain in Europe). Each region operates independently — a failure in us-east-1 does not affect eu-west-1.


**Availability Zone (AZ)** — a physically separate data centre within a region, with its own power supply, cooling, and network connection. Each region has 2–6 AZs. AZs within a region are connected by low-latency private fibre links.

```text
Region: eu-west-1 (Ireland)
  ├── AZ: eu-west-1a  (data centre A — its own power and cooling)
  ├── AZ: eu-west-1b  (data centre B — its own power and cooling)
  └── AZ: eu-west-1c  (data centre C — its own power and cooling)
```

Deploying across multiple AZs protects against a single data centre failure. Deploying across multiple regions protects against a regional outage (rare, but happens) and reduces latency for global users by serving them from the nearest region.


**Edge locations** — CDN endpoints (covered in 2.04) distributed globally in hundreds of cities, separate from regions and AZs. Used only for caching and content delivery, not for running your application.


### Core Service Categories

Rather than memorising every service, understand the categories and their primary AWS equivalents — other clouds (GCP, Azure) have equivalent services with different names.

**Compute — running your code:**

| Service | What it does | When to use |
|---|---|---|
| **EC2** (Elastic Compute Cloud) | Virtual machines you fully control | You need full OS control, custom runtimes, or are lifting-and-shifting an existing app |
| **ECS / EKS** | Run Docker containers (ECS = AWS-managed, EKS = Kubernetes) | Containerised microservices at scale |
| **Lambda** | Serverless functions — run code without managing servers | Event-driven, short-lived tasks (image resize on upload, webhook handler, scheduled jobs) |
| **Fargate** | Run containers without managing the underlying EC2 instances | Containers without the EC2 management overhead |



**Storage:**

| Service | What it does | When to use |
|---|---|---|
| **S3** | Object storage for files (covered in 3.04) | Images, videos, backups, static assets |
| **EBS** (Elastic Block Store) | Persistent disk attached to an EC2 instance | Database storage, anything requiring a traditional filesystem |
| **EFS** (Elastic File System) | Shared network filesystem multiple instances can mount simultaneously | When multiple servers need access to the same files |



**Database:**

| Service | What it is | Underlying engine |
|---|---|---|
| **RDS** | Managed relational database | PostgreSQL, MySQL, MariaDB |
| **Aurora** | AWS-optimised relational DB, faster and more available than RDS | MySQL or PostgreSQL compatible |
| **DynamoDB** | Managed NoSQL key-value / document store | AWS proprietary |
| **ElastiCache** | Managed in-memory cache | Redis or Memcached |
| **Redshift** | Managed data warehouse for analytics | PostgreSQL-based, columnar storage |



**Networking:**

| Service | What it does |
|---|---|
| **VPC** | Your private isolated network inside AWS — subnets, security groups, routing |
| **ALB** (Application Load Balancer) | Layer 7 HTTP/HTTPS load balancer with path-based routing |
| **NLB** (Network Load Balancer) | Layer 4 TCP/UDP load balancer, extreme throughput |
| **Route 53** | DNS service — domain registration, routing policies (latency, failover, geolocation) |
| **CloudFront** | AWS CDN — covered in 2.04 |
| **API Gateway** | Managed API gateway — covered in 2.05 |



**Messaging & events:**

| Service | What it does |
|---|---|
| **SQS** (Simple Queue Service) | Managed message queue — equivalent to RabbitMQ |
| **SNS** (Simple Notification Service) | Pub/sub fan-out — one message, many subscribers (email, SMS, SQS, Lambda) |
| **MSK** (Managed Streaming for Kafka) | Managed Apache Kafka |
| **EventBridge** | Event bus for routing events between AWS services and external SaaS apps |


### Serverless — Lambda & FaaS

Serverless does not mean no servers — it means you do not manage them. AWS Lambda (Function as a Service) runs your code in response to an event, automatically provisions the compute needed, and shuts it down when done. You pay only for the milliseconds your code actually runs.

```text
Traditional server:
  EC2 instance running 24/7 → you pay for it even when idle
  You manage: OS patches, scaling, capacity planning

Lambda:
  Event arrives → AWS spins up your function → runs → shuts down
  You pay: only for execution time (first 1M requests/month free)
  You manage: just the function code
```


**What triggers a Lambda:**
- HTTP request via API Gateway
- File uploaded to S3 (resize image, scan for viruses)
- Message in an SQS queue
- Scheduled cron (CloudWatch Events)
- Database stream event (DynamoDB Streams)


**Limitations to know for system design:**
- **Execution timeout** — max 15 minutes. Not for long-running processes.
- **Cold start** — when a function has not been invoked recently, AWS must provision a new container, adding 100ms–1s of latency. Problematic for latency-sensitive APIs.
- **Stateless** — no local disk state between invocations. All state must go to S3, DynamoDB, or ElastiCache.
- **Concurrency limits** — by default 1,000 concurrent executions per account per region. Can be increased, but must be planned for.


**Good for**: webhooks, image/video processing, scheduled jobs, fan-out event processing, API backends with spiky or unpredictable traffic.
**Not good for**: long-running processes, WebSocket servers, anything needing local state or sub-100ms consistent latency.


### Containers and Kubernetes

**Containers** package your application and all its dependencies (runtime, libraries, config) into a single portable unit. The same container runs identically on a developer's laptop, in CI/CD, and in production.

```text
Without containers:
  "It works on my machine" — different OS, different library versions, different config
  → works locally, breaks in production

With containers:
  Build once → ship the same image everywhere
  → identical environment in dev, staging, and production
```


**Docker** is the standard tool for building and running containers. It introduced the formats and workflows that the whole industry now uses.

The key concepts:

- **Image** — a read-only snapshot of your application and everything it needs: the OS base layer, runtime (e.g. Node.js 20, JDK 21), dependencies (node_modules, Maven jars), your compiled application code, and the command to run it. An image is built once and can be run anywhere Docker is installed.


- **Container** — a running instance of an image. Lightweight and isolated — it has its own filesystem, network, and process space, but shares the host machine's OS kernel (unlike a virtual machine, which has its own full OS). You can run dozens of containers on a single machine with minimal overhead.


- **Dockerfile** — a text file with instructions to build an image layer by layer:

```dockerfile
FROM node:20-alpine          # start from the official Node.js base image
WORKDIR /app                 # set the working directory inside the container
COPY package*.json ./        # copy dependency manifest
RUN npm ci                   # install dependencies (cached if package.json unchanged)
COPY . .                     # copy application source code
RUN npm run build            # compile
EXPOSE 3000                  # document which port the app listens on
CMD ["node", "dist/index.js"]  # command to run when the container starts
```


- **Registry** — a storage server for images. You push an image to a registry and pull it in production. **Docker Hub** is the public registry. **Amazon ECR** and **Google Artifact Registry** are private cloud registries.

```text
Developer workflow:
  docker build -t my-app:1.0.0 .       # build image from Dockerfile
  docker push my-registry/my-app:1.0.0 # push to registry
  docker run -p 3000:3000 my-app:1.0.0 # run locally

Production:
  Pull image from registry → run as container on a server
```


- **docker-compose** — runs multi-container applications locally. One `docker-compose.yml` starts your API, database, and Redis together with a single `docker-compose up`. Used for local development — not for production at scale (that is what Kubernetes is for).

```yaml
services:
  api:
    build: .
    ports: ["3000:3000"]
    environment:
      DATABASE_URL: postgres://postgres:password@db:5432/myapp
    depends_on: [db, redis]
  db:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: password
  redis:
    image: redis:7-alpine
```


The key difference between Docker and a virtual machine: a VM virtualises an entire computer including the OS kernel — gigabytes of disk, seconds to start. A container shares the host OS kernel and only packages the application layer — images are megabytes and containers start in milliseconds.



**Kubernetes (K8s)** is an orchestration platform that manages containers at scale — scheduling them across a cluster of machines, restarting crashed containers, scaling up/down, handling rolling deployments, and routing traffic between them. Docker runs one container on one machine; Kubernetes runs thousands across many machines.


Key Kubernetes concepts you need for system design:

- **Pod** — the smallest deployable unit, containing one or more containers that share a network and storage
- **Deployment** — declares how many replicas of a pod to run; Kubernetes maintains that count (if one crashes, a new one starts)
- **Service** — a stable internal DNS name and IP that routes traffic to the pods behind it (pods come and go, the Service address stays the same)
- **Ingress** — routes external HTTP/HTTPS traffic into the cluster, acts like a load balancer + API gateway
- **ConfigMap / Secret** — inject configuration and secrets into containers at runtime without baking them into the image
- **HorizontalPodAutoscaler** — automatically scales the number of pod replicas based on CPU, memory, or custom metrics


On AWS, you run Kubernetes with **EKS** (Elastic Kubernetes Service) — AWS manages the control plane, you manage the worker nodes (or use Fargate to avoid managing nodes too).


### Managed vs Self-Hosted

Every component in your architecture can be either managed by the cloud or self-hosted on your own VMs. The trade-off is always the same:

| | Managed (e.g. RDS, ElastiCache, MSK) | Self-hosted (e.g. PostgreSQL on EC2) |
|---|---|---|
| **Operational overhead** | Low — AWS handles patches, backups, failover | High — you manage everything |
| **Cost** | Higher per unit | Lower per unit |
| **Control** | Limited — you configure, not tune internals | Full — any configuration possible |
| **Reliability** | High — AWS SLA, multi-AZ built-in | Depends on what you build |
| **Time to set up** | Minutes | Hours to days |


**Default to managed services.** The operational savings almost always outweigh the cost difference, especially for a small or medium team. Self-host only when you have a specific requirement that a managed service cannot meet (unusual configuration, cost at extreme scale, regulatory restriction).


### Infrastructure as Code (IaC)

Manually clicking through the AWS console to create infrastructure is not reproducible, not auditable, and error-prone. Infrastructure as Code means defining your infrastructure in configuration files that can be versioned, reviewed, and applied automatically.


- **Terraform** — the most widely used IaC tool. Declarative HCL syntax. Cloud-agnostic (works with AWS, GCP, Azure, and hundreds of providers). You describe the desired state; Terraform figures out what to create, update, or delete.
- **AWS CloudFormation** — AWS-native IaC using JSON or YAML. Tightly integrated with AWS services but locked into AWS.
- **AWS CDK** (Cloud Development Kit) — define infrastructure using real programming languages (TypeScript, Python, Java). Compiles down to CloudFormation.

```text
Terraform example — create an S3 bucket:

resource "aws_s3_bucket" "uploads" {
  bucket = "my-app-uploads"
}

resource "aws_s3_bucket_server_side_encryption_configuration" "uploads" {
  bucket = aws_s3_bucket.uploads.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}
```

In a system design interview, mentioning IaC shows you think about reproducibility and operational maturity — not just the happy-path architecture.


### Cloud in System Design Interviews

When drawing your architecture, default to managed services and name them explicitly:

- Load balancer → **ALB**
- Cache → **ElastiCache (Redis)**
- Object storage → **S3**
- Relational DB → **RDS (PostgreSQL)** or **Aurora**
- Queue → **SQS** or **MSK (Kafka)**
- CDN → **CloudFront**
- Serverless → **Lambda**
- Containers → **EKS** or **ECS + Fargate**

Mentioning "deploy across 2 AZs with RDS Multi-AZ and an ALB" is more concrete and credible than "use a load balancer and a database". It signals you have actually shipped systems, not just drawn diagrams.


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