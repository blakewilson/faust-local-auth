import "faust.config";
import { apiRouter } from "@faustjs/core/api";
import { config } from "@faustjs/core";

console.log(config());

export default apiRouter;
