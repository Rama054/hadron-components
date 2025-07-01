import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.js",
      name: "HadronComponents",
      fileName: (format) => `hadron-components.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react", 
        "react-dom", 
        "react-router-dom",  
        "react-icons",       
        "react-hook-form",   
        "styled-components"  
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-router-dom": "ReactRouterDOM",     
          "react-icons": "ReactIcons",              
          "react-hook-form": "ReactHookForm",
          "styled-components": "StyledComponents"
        },
      },
    },
  },
});