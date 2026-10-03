import Login from "@/components/Auth/Login/index";

export default function login({ searchParams }) {
  const role = searchParams?.role === "wholesale" ? "wholesale" : "retail";
  return <Login role={role} />;
}
