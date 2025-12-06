# OpenRent – Map-Based Property Discovery Redesign (UI/UX Concept)

This project is a focused UI/UX redesign exploration of OpenRent’s map-based property discovery experience. The goal was to identify and improve a core usability pain point within a limited time constraint, rather than recreate the full product.

The prototype introduces quick-view property cards directly on map interaction, enabling faster, more intuitive browsing without breaking spatial context.

## 🎯 Project Goals

- Improve the usability of the map-based property search experience  
- Reduce friction between map interaction and property discovery  
- Enable faster decision-making through in-context previews  
- Demonstrate UX thinking, UI design, and frontend implementation within a short timebox  

## 🚨 Key Pain Points Identified

### 1. No In-Context Property Preview on the Map  
In the current OpenRent experience, users must:
- Click a map pin  
- Wait for the browser to scroll  
- Locate the associated property card in the listing  

This breaks spatial context and creates unnecessary friction. Users ideally want:

- Immediate visual confirmation of property details such as price, number of bedrooms, and bathrooms 
- Faster scanning without losing their place on the map  

### 2. Disconnect Between Map and Exploration Flow  
The map and results list are connected, but the experience feels disconnected. The interaction requires:
- Extra scrolling  
- Context switching  
- Increased cognitive load  

This redesign focuses on keeping users fully within the map exploration flow.

## ✅ Solution Overview

The goal is to allow users to support faster discovery and decision-making without taking users away from the map.
This prototype includes:

- **Interactive map pins** with hover and click states  
- **Property preview cards** displayed directly on the map  
- A simple **search** to filter property listings

## ⏰ Time Constraints & Scope Decisions

Due to the limited timeframe, I deliberately focused on:
- Map interaction
- Quick preview behavior
- Search and filtering experience

Rather than rebuilding the full list view, the emphasis was placed on solving the **core interaction friction** between pin selection and property discovery.

## ⚠️ Known Limitations / Future Improvements

If given more time, I would:

- Recenter the map automatically when a pin is selected  
- Improve edge collision handling so cards never clip outside the container  
- Add smooth camera panning and zoom transitions  
- Introduce clustered pins for dense areas  
- Sync hover states between map and full list view  
- Add accessibility improvements (ARIA roles, keyboard map navigation)  
- Refine mobile touch interactions  

## 🧠 UX & Product Thinking Highlights

- Focused on **one high-impact problem** instead of rebuilding the entire UI  
- Designed for **in-context decision-making**  
- Optimised for **fast scanning** and reduced **cognitive effort**

## 🛠 Tech Stack

- React  
- TypeScript  
- CSS   

## 🚀 How to Run the Project

```bash
npm install
npm run dev
