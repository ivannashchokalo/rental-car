# 🚗 Rental Car

## 📝 About the Project

**Rental Car** is a modern car rental web application built with **Next.js App Router** and **TypeScript**.

The application allows users to browse available cars, apply filters, view detailed car information, and send booking requests online.

The project demonstrates modern Frontend Development practices and work with:

* ⚡ App Router
* 🔍 URL Search Params
* 📦 Dynamic Routes
* 🚀 SEO Metadata
* 🔄 Client / Server Components
* 📋 Form Handling & Validation
* 🌐 REST API Integration
* 🎨 Custom UI Components

---

## ✨ Features

* 🚘 **Car Catalog** — browse available cars
* 🔍 **Car Filtering**

  * by brand
  * by rental price
  * by mileage
* 📄 **Dynamic Car Details Page**

  * car specifications
  * rental conditions
  * description
  * location
* 📩 **Car Booking Form**
* ✅ **Form Validation**
* 🔗 **URL-based Filters** — filters are synchronized with the URL
* 🧭 **Active Navigation**
* ⚡ **SEO Metadata Generation**
* 🔔 **Toast Notifications**
* ⏳ **Loading States**
* ❌ **Error Handling**
* 🎨 **Custom Select Component**

---

## 🛠️ Technologies & Tools

* ⚛️ **React**
* ▲ **Next.js**
* 🔷 **TypeScript**
* 🎨 **CSS Modules**
* ⚡ **TanStack Query**
* 🌐 **Axios**
* 🧩 **clsx**
* 📋 **Formik**
* ✅ **Yup**
* 🔔 **React Hot Toast**
* 🎨 **React Select**
* 🖼️ **next/image**
* 🔍 **next/navigation**
* 📦 **App Router**
* 🌐 **Vercel**

---

## 📚 Main Libraries

### ⚡ Data Fetching

* **@tanstack/react-query**
* **axios**

### 📋 Forms & Validation

* **formik**
* **yup**

### 🎨 UI & Styling

* **react-select**
* **react-datepicker**
* **react-hot-toast**
* **clsx**
* **modern-normalize**

---

## 🌐 Backend API

The project uses the RentalCar API:

```bash id="w6j2yx"
https://car-rental-api.goit.study
```

### Used Endpoints

```bash id="74i0i7"
GET /cars
GET /cars/{id}
GET /cars/filters
POST /cars/{carId}/booking-requests
```

---

## 🧱 Project Structure

```bash id="wjlwm4"
app/
 ┣ catalog/
 ┃ ┗ [carId]/
 ┣ components/
 ┣ lib/
 ┣ providers/
 ┣ public/
 ┗ styles/
```

---

## 🔍 SEO Optimization

The project implements dynamic metadata generation using:

```ts id="ty1b6p"
generateMetadata()
```

Includes:

* 📌 title
* 📌 description
* 📌 Open Graph metadata
* 📌 dynamic URLs

This improves:

* SEO optimization
* social media previews
* page indexing

---

## 🔗 URL Search Params

Filtering is implemented using:

* `useSearchParams()`
* `URLSearchParams`
* `router.push()`

Filters are automatically synchronized with the URL, allowing users to:

* share links
* preserve page state
* improve user experience

---

## ⚡ Performance Optimization

The project uses:

* 🖼️ `next/image`
* ⚡ Server Components
* 📦 Code Splitting
* 🚀 Optimized Routing
* 🔍 Metadata API

---

## 🚀 Deployment

The project is deployed on:

* ▲ **Vercel**

### 🌐 Production URL

```bash id="drq2m0"
https://rental-car-4csh.vercel.app/
```

---

## ⚙️ Installation

```bash id="goj1lh"
git clone git@github.com:ivannashchokalo/rental-car.git

cd rental-car

npm install

npm run dev
```

Open:

```bash id="9jv56y"
http://localhost:3000
```

---

## 📜 Available Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Run development server       |
| `npm run build` | Build project for production |
| `npm run start` | Start production build       |

---

## 🔐 Environment Variables

Create `.env` file in the root directory and add required environment variables.

Example:

```env id="z0d2ow"
NEXT_PUBLIC_API_URL=https://car-rental-api.goit.study
```

---

## 👩‍💻 Author

**Ivanna Shchokalo**

* 💼 Junior Frontend Developer
* 🌐 React / Next.js Developer

GitHub:
👉 https://github.com/ivannashchokalo

---

## 📄 License

This project was created for educational and portfolio purposes ✨


