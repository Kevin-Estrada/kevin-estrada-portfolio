// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import schemas from './schemas/schema'

export default defineConfig({
    title: "portfolioStudio",
    projectId: "ijui30ya",
    dataset: "production",
    plugins: [deskTool()],
    schema: {
        types: schemas,
    },
});