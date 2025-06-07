
🧩 Flowchart Generator
A drag-and-drop flowchart builder built with Next.js, React Flow, TailwindCSS, and Zustand. Quickly prototype flowcharts using shapes like squares, rectangles, circles, ovals, and rhombuses — and connect them with animated edges.

🚀 100% free, open-source, and works entirely without a backend — everything is stored in your browser.

🌐 Live Demo
<!-- replace with actual URL -->

✨ Features
📦 Drag & Drop Shapes – Add squares, rectangles, circles, ovals, and rhombuses.

🔗 Connect Shapes with Edges – Create visual logic flows easily.

💾 State Persistence – Auto-saves to browser localStorage.

🎨 Change Colors – Customize node background and text color.

✍️ Editable Labels – Click on nodes to rename them.

🎛️ Zoom, Pan, Controls – Built-in canvas interactions via React Flow.

🧠 Zustand for State – Lightweight and powerful store management.

💻 No Backend Needed – Fully client-side.

🧱 Tech Stack
Next.js (App Router)

React Flow – canvas & edge logic

TailwindCSS – for styling

Zustand – state management

Framer Motion – optional animations

html2canvas – optional export

📦 Installation
bash
Copy
Edit
git clone https://github.com/Sagnik-Bhattacharya/flowchart-generator.git
cd flowchart-generator
npm install
npm run dev
🗂️ Project Structure
bash
Copy
Edit
/app
  /flow              # Main flowchart page
/components
  Sidebar.jsx        # Shape list
  FlowCanvas.jsx     # Flowchart canvas
/lib
  store.js           # Zustand store
/public
  ...                # Static assets


🚀 Roadmap
 Export flowchart as image (PNG/SVG)

 Add undo/redo support

 Save and load flowcharts from JSON

 Dark mode


🙌 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

👨‍💻 Author
Built with ❤️ by Sagnik Bhattacharya