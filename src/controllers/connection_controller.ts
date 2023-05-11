import { Request, Response } from "express";

export class connectionController {
   serverIsOn(req: Request, res: Response) {
      return res.status(200).json({message: "Server on"});
   }
}