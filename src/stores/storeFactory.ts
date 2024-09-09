import { VoucherStore } from "./VoucherStore";
import { IRootStore, RootStore } from "./rootStore";

export function makeStore(): IRootStore {
  const rootStore = new RootStore();
  const voucherStore = new VoucherStore(rootStore);

  rootStore.register("VoucherStore", voucherStore);

  return rootStore;
}
