// @ts-check

// /**
//  * This function says hello.
//  * @param name Some name to say hello for.
//  * @returns The hello.
//  */

export const generateNewField = fieldName => {
  return {
    id: fieldName
  }
};

export default [
  /**
   * NOTE: The text input fields
   */
  {
    component: "VInput",
    label: "First Name",
    id: "firstName",
    submitId: "firstName",
    type: "text",
    rules: "required"
  },

  {
    component: "VInput",
    label: "Last Name",
    id: "lastName",
    submitId: "lastName",
    type: "text",
    rules: "required"
  },

  {
    component: "VInput",
    label: "Email Address",
    id: "email",
    submitId: "email",
    type: "email",
    rules: "required|email|isValidEmail"
  },

  {
    component: "VInput",
    label: "Zip",
    id: "zip",
    submitId: "zip",
    type: "text",
    rules: "required|isValidZip"
  },

  {
    component: "VInput",
    label: "Phone",
    id: "phone",
    submitId: "phone",
    type: "tel",
    rules: "required|isValidPhoneNumber"
  },

  /**
   * NOTE: The select fields
   */

  {
    adminName: "All Programs Dropdown",
    component: "VSelect",
    type: "select",
    id: "allPrograms",
    submitId: "program",
    label: "Select a Program",
    selectOptions: "programs",
    useGroups: false,
    rules: "required"
  },

  {
    adminName: "Online Programs Dropdown",
    component: "VSelect",
    type: "select",
    id: "onlinePrograms",
    submitId: "program",
    label: "Select a Program",
    selectOptions: "onlinePrograms",
    useGroups: false,
    rules: "required"
  },

  {
    adminName: "Campus Programs Dropdown",
    component: "VSelect",
    type: "select",
    id: "campusPrograms",
    submitId: "program",
    label: "Select a Program",
    selectOptions: "campusPrograms",
    useGroups: false,
    rules: "required"
  },

  {
    adminName: "Countries Dropdown",
    component: "VSelect",
    type: "select",
    id: "countries",
    submitId: "program",
    label: "Select a Program",
    selectOptions: "countries",
    useGroups: false,
    rules: "required"
  }
];
