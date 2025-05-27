import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const filePath = path.join(__dirname, "data", "tasks.json");


export const readTasks = () => {
    try {
        ensureFileExists();
        const data = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(data || "[]")
    } catch (error) {
        console.error("Error reading tasks:", error)
        return [];
    }
}


export const writeTask = (tasks) => {
    try {
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(path.dirname(filePath), { recursive: true })
            fs.mkdirSync(filePath, "[]", "utf-8");
        }
    } catch (error) {
        console.error("Error writing tasks:", error);
    }
};


const ensureFileExists = () => {
    try {
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(path.dirname(filePath), { recursive: true });
            fs.writeFileSync(filePath, "[]", "utf-8");
        }
    } catch (error) {
        console.error("Enter ensuring file exists:", error)
    }
};