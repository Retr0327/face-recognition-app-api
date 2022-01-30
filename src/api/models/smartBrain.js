import PG from "pg";
import { config } from "dotenv";

config();

const SMART_BRAIN = new PG.Pool();

export default SMART_BRAIN;
