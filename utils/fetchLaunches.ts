import config from "@/config/config";
import { Launch } from "@/types";

interface FetchLaunchesOptions {
  id?: boolean;
  limit?: number;
  offset?: number;
  sort?: string;
  order?: "asc" | "desc";
}

interface FetchLaunchesResponse {
  launches: Launch[];
  totalPages: number;
}

export const fetchLaunches = async (
  options: FetchLaunchesOptions = {}
): Promise<FetchLaunchesResponse> => {
  const { id, limit, offset, sort, order } = options;
  const queryParams = new URLSearchParams();

  if (id !== undefined) queryParams.append("id", String(id));
  if (limit !== undefined) queryParams.append("limit", String(limit));
  if (offset !== undefined) queryParams.append("offset", String(offset));
  if (sort !== undefined) queryParams.append("sort", sort);
  if (order !== undefined) queryParams.append("order", order);

  const queryString = queryParams.toString();
  const url = `${config.API_URL}/launches${
    queryString ? `?${queryString}` : ""
  }`;

  try {
    const response = await fetch(url);
    const data: Launch[] = await response.json();
    const totalPages = Math.ceil(190 / (limit ?? 1));
    return { launches: data, totalPages };
  } catch (error) {
    console.error("Failed to fetch launches", error);
    throw error;
  }
};
