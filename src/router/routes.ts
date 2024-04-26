import { Router, Request, Response, NextFunction } from "express";
import PostController from "../controller/PostController";
import AccountController from "../controller/AccountController";
import { isValidAccount, hasWalletAccess } from "../middleware/auth";
import WalletController from "../controller/WalletController";
import { postLimit } from "../middleware/limit";

const router = Router();
router.all('/health', async (req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: 'API is active',
  });
})
router.route('/account')
  .get(AccountController.index)

router.use(isValidAccount);
router.get('/wallet', WalletController.index)
router.route('/wallet/:walletId/post')
  .post(postLimit, hasWalletAccess, PostController.create)
  .get(hasWalletAccess, PostController.index)
router.use((req, res) => {
  return res.status(404).json({
    status: "not-found",
    message: "Resource not found",
  });
});


export default router;
