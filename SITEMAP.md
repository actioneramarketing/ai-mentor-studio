# AI Mentor Studio – Complete Sitemap

Every route in the application. Route groups `(public)`, `(creator)`, `(admin)`, and `(user)` do not appear in the URL.

---

## Public routes

| Path | File | Description |
|------|------|-------------|
| `/` | `app/(public)/page.tsx` | Homepage / landing |
| `/login` | `app/(public)/login/page.tsx` | Login |
| `/register` | `app/(public)/register/page.tsx` | Registration |
| `/pricing` | `app/(public)/pricing/page.tsx` | Pricing |
| `/about` | `app/(public)/about/page.tsx` | About |

---

## Creator routes

| Path | File | Description |
|------|------|-------------|
| `/dashboard` | `app/(creator)/dashboard/page.tsx` | Creator dashboard |
| `/studios` | `app/(creator)/studios/page.tsx` | Studios list |
| `/studios/[studioId]` | `app/(creator)/studios/[studioId]/page.tsx` | Studio detail |
| `/studios/[studioId]/settings` | `app/(creator)/studios/[studioId]/settings/page.tsx` | Studio settings |
| `/studios/[studioId]/leads` | `app/(creator)/studios/[studioId]/leads/page.tsx` | Studio leads |
| `/studios/[studioId]/access` | `app/(creator)/studios/[studioId]/access/page.tsx` | Studio access |
| `/studios/[studioId]/mentors` | `app/(creator)/studios/[studioId]/mentors/page.tsx` | Studio mentors list |
| `/studios/[studioId]/mentors/new` | `app/(creator)/studios/[studioId]/mentors/new/page.tsx` | Create mentor |
| `/studios/[studioId]/mentors/[mentorId]/edit` | `app/(creator)/studios/[studioId]/mentors/[mentorId]/edit/page.tsx` | Edit mentor |

---

## Admin routes

| Path | File | Description |
|------|------|-------------|
| `/admin` | `app/(admin)/admin/page.tsx` | Admin dashboard |
| `/admin/users` | `app/(admin)/admin/users/page.tsx` | User management |
| `/admin/studios` | `app/(admin)/admin/studios/page.tsx` | Studio management |

---

## User routes

| Path | File | Description |
|------|------|-------------|
| `/s/[studioSlug]` | `app/(user)/s/[studioSlug]/page.tsx` | Public studio view |
| `/s/[studioSlug]/[mentorSlug]` | `app/(user)/s/[studioSlug]/[mentorSlug]/page.tsx` | Public mentor chat |

---

## Layout structure

```
app/
├── layout.tsx              # Root layout
├── globals.css
├── (public)/
│   ├── page.tsx            # /
│   ├── login/page.tsx
│   ├── register/page.tsx
│   ├── pricing/page.tsx
│   └── about/page.tsx
├── (creator)/
│   ├── layout.tsx
│   ├── dashboard/page.tsx
│   └── studios/
│       ├── page.tsx
│       └── [studioId]/
│           ├── page.tsx
│           ├── settings/page.tsx
│           ├── leads/page.tsx
│           ├── access/page.tsx
│           └── mentors/
│               ├── page.tsx
│               ├── new/page.tsx
│               └── [mentorId]/edit/page.tsx
├── (admin)/
│   ├── layout.tsx
│   └── admin/
│       ├── page.tsx
│       ├── users/page.tsx
│       └── studios/page.tsx
└── (user)/
    ├── layout.tsx
    └── s/
        └── [studioSlug]/
            ├── page.tsx
            └── [mentorSlug]/page.tsx
```

---

## Route count summary

| Segment | Count |
|---------|-------|
| Public | 5 |
| Creator | 9 |
| Admin | 3 |
| User | 2 |
| **Total** | **19** |
