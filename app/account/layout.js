import SideNavigation from "../_components/SideNavigation";

export default function layout({ children }) {
  return (
    <div className="grid grid-cols-[4rem_1fr] md:grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div>{children}</div>
    </div>
  );
}
