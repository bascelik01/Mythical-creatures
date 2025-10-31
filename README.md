# 🐉 Mythical Creature Encyclopedia

A digital codex of legendary beings from fantasy realms.  
Built with **Node.js**, **Express**, **EJS**, **MongoDB**, and **pixel-art inspired CSS**, this app allows users to catalog, explore, and manage mythical creatures with details such as HP, rarity, and category.

**Every user will be able to create his personal bestiary and use it for various purposes, like D&D campaigns storytelling, inspiration.**

---

## ✨ Features

- **Create** new creatures with name, origin, type (category), description, HP, and rarity.  
- **Read** all creatures, organized into multiple sections/categories (e.g., Dragons, Spirits, Sea Monsters).  
- **Update** any creature details.  
- **Delete** creatures that have vanished from memory.  
- **Pixel-Art Theme:** Styled with pixel-art inspired CSS for a retro, fantasy look.  

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-------------|
| Backend | Node.js + Express |
| Frontend | HTML, CSS (pixel-art inspired), JavaScript |
| Templating | EJS |
| Database | MongoDB (via Mongoose) |
| Dev Tool | Nodemon |
| Environment | `.env` (PORT, MONGO_URI) |

|--------|------------------|


## 🐲 Example Creature Entry
| Name           | Origin         | Type        | HP  | Rarity    | Description                                                   |
| -------------- | -------------- | ----------- | --- | --------- | ------------------------------------------------------------- |
| Smolderwing    | Dragon’s Peak  | Dragon      | 150 | Legendary | Breathes fire and hoards ancient treasures.                   |
| Frostfeather   | Northern Glade | Spirit      | 80  | Rare      | A ghostly bird that chills the air wherever it flies.         |
| Abyssal Kraken | Deep Seas      | Sea Monster | 200 | Legendary | Tentacles capable of dragging entire ships beneath the waves. |

## 🧩 CRUD Routes Overview

| Method | Route                 | Description                |
| ------ | --------------------- | -------------------------- |
| GET    | `/creatures`          | Show all creatures         |
| GET    | `/creatures/new`      | Form to add a new creature |
| POST   | `/creatures`          | Create a creature          |
| GET    | `/creatures/:id`      | Show creature details      |
| GET    | `/creatures/:id/edit` | Form to edit creature      |
| PUT    | `/creatures/:id`      | Update creature            |
| DELETE | `/creatures/:id`      | Delete creature            |

## 🌠 Future Enhancements

🌍 Map-based visualization of creature origins

🖼️ Pixel-art image upload for each creature

⭐ Advanced filtering by rarity, HP, or type



