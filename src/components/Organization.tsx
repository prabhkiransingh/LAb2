import { useState } from "react";
import orgData from "../components/data/organization.json";

interface OrgRole {
  role: string;
  name: string;
  description: string;
}

export default function Organization() {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  const toggleRole = (role: string) => {
    setExpandedRole(expandedRole === role ? null : role);
  };

  return (
    <main>
      <h2>Organization Leadership</h2>
      <div>
        {orgData.map((item: OrgRole, idx) => (
          <section key={idx}>
            <h4 onClick={() => toggleRole(item.role)} style={{ cursor: "pointer" }}>
              {item.role} - {item.name}
            </h4>
            {expandedRole === item.role && (
              <p>{item.description}</p>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
