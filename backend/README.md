# Zachary's Backend - Badge API

This is the backend for our GroupC project. I built the routes using Deno and set them up to work with our frontend later.

---

 `POST /api/badges`
Gives a badge to a user  
📦 Body format:
```json
{
  "userId": 1,
  "badge": "Final Project Complete"
}
