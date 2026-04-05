import { useMutation, useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useVisitorCount() {
  const { actor, isFetching } = useActor();
  return useQuery<bigint>({
    queryKey: ["visitorCount"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getVisitorCount();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useVisit() {
  const { actor } = useActor();
  return useMutation<bigint, Error>({
    mutationFn: async () => {
      if (!actor) return BigInt(0);
      return actor.visit();
    },
  });
}
