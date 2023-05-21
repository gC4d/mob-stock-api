import { AppDataSource } from "../data-source";
import { StockAudit } from "../entities/StockAudit";

export const stockAuditRepository = AppDataSource.getRepository(StockAudit)