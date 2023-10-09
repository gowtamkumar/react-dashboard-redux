import { NavLink } from "react-router-dom";
import dashboardRoutes from "../../../_nav";

export default function DashBoardSidebar() {
  return (
    <div className="flex-item-left">
      <h2 className="text-center" style={{ backgroundColor: "white" }}>
        Logo
      </h2>
      {dashboardRoutes.map((item, idx) => {
        if (item?.children) {
          return (
            <div className="accordion" id="accordionExample" key={idx}>
              <div>
                <h2 className="accordion-header" id={`headingOne${item.id}`}>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${item.id}`}
                    aria-expanded="true"
                    aria-controls={`${item.id}`}
                  >
                    {item.title}
                  </button>
                </h2>
                <div
                  id={item.id}
                  className="accordion-collapse collapse"
                  aria-labelledby={`headingOne${item.id}`}
                  data-bs-parent="#accordionExample"
                >
                  <div>
                    {item?.children.map((item, idx) => {
                      return (
                        <ul key={idx} className="navbar-nav sidebarChildren">
                          <li>
                            <NavLink
                              to={item.url}
                              className="nav-link sidebaritem"
                            >
                              <span>{item.childIcon}</span>
                              <span className="p-2">{item.name}</span>
                            </NavLink>
                          </li>
                        </ul>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        } else if (item.heading) {
          return (
            <ul className="navbar-nav">
              <li className="nav-item">
                <span
                  className="nav-link fw-bold text-dark"
                  style={{ marginLeft: "20px" }}
                >
                  {item.heading}
                </span>
              </li>
            </ul>
          );
        } else {
          return (
            <ul className="navbar-nav">
              <li>
                <NavLink to={`${item.url}`} className="nav-link sidebaritem">
                  <span className="fs-5">{item.icon}</span>
                  <span className="p-2">{item.name}</span>
                </NavLink>
              </li>
            </ul>
          );
        }
      })}
    </div>
  );
}
