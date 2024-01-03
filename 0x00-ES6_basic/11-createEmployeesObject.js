export default function createEmployeesObject(departmentName, employees) {
  const myobj = {
    [departmentName]:
    employees,
  };
  return myobj;
}
