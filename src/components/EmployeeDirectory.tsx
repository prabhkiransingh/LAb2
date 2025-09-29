import { useEffect, useState } from "react";
import { employees } from "../components/employees";
import type { EmployeeDepartment } from "../components/employees";
import { Input } from "../ui/input";
import { Select } from "../ui/Select";

export function EmployeeList() {
  const [data, setData] = useState<EmployeeDepartment[]>(employees);
  const [filterOptions, setFilterOptions] = useState<string[]>([]);

  const setupFilters = () => {
    const departments = employees.map((dept) => dept.department);
    setFilterOptions(["All", ...departments]);
  };

  const onFilterChange = (filterValue: string) => {
    const all = [...employees];
    const filtered =
      filterValue === "All"
        ? all
        : all.filter((dept) => dept.department === filterValue);

    setData(filtered);
  };

  const onSearchUpdate = (searchTerm: string) => {
    const all = [...employees];
    const st = searchTerm.toLowerCase();

    const filtered = all.filter((dept) => {
      const department = dept.department.toLowerCase();
      const names = dept.employees.map((emp) => emp.toLowerCase());

      return (
        department.includes(st) || names.some((emp) => emp.includes(st))
      );
    });

    setData(filtered);
  };

  useEffect(() => {
    setupFilters();
  }, []);

  return (
    <main>
      <h2>Employee Directory</h2>
      <div>
        <Input
          placeholder="Search by name or department..."
          onChange={(e) => onSearchUpdate(e.target.value)}
        />
        <Select onChange={(e) => onFilterChange(e.target.value)}>
          {filterOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
      </div>
      
      <div>
        {data.map((dept) => (
          <section key={dept.department}>
            <h4>{dept.department}</h4>
            <ul>
              {dept.employees.map((name, idx) => (
                <li key={idx}>{name}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
