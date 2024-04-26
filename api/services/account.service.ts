import { Account } from "../db/models";
import { NotFoundError } from "../error";
import { BasicDataRetriever } from "../interface";

class AccountService implements BasicDataRetriever<Account> {
  async findOneViaRef(secret: string) {
    const account = await Account.findOne({
      where: {
        secret
      }
    });
    if (!account) {
      throw new NotFoundError('Unknown Account Secret');
    }
    return account
  };
  async findOne(id: number) {
    return Account.findByPk(id)
  }
  async findAll() {
    return Account.findAll()
  }

}

export default new AccountService();