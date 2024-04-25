import { Account } from "../db/models";
import { BasicDataRetriever } from "../interface";

class AccountService implements BasicDataRetriever<Account> {
  async findOneViaRef (secret: string) {
    return Account.findOne({
      where: {
        secret
      }
    })
  };
  async findOne(id: number) {
    return Account.findByPk(id)
  }
  async findAll() {
    return Account.findAll()
  }

}

export default new AccountService();