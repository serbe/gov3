import { useStore } from "@/store";
import { useRouter } from "vue-router";

export const backPage = () => {
  const router = useRouter();
  const store = useStore();
  const prevPage = store.getters.getLastPath;
  router.push(prevPage);
};
