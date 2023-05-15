// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Bills" titleTo="bills" buttonLabel="New Bill" buttonTo="newBill">
        <Route path="/bills/new" page={BillNewBillPage} name="newBill" />
        <Route path="/bills/{id:Int}/edit" page={BillEditBillPage} name="editBill" />
        <Route path="/bills/{id:Int}" page={BillBillPage} name="bill" />
        <Route path="/bills" page={BillBillsPage} name="bills" />
      </Set>
      <Set wrap={ScaffoldLayout} title="InventoryItems" titleTo="inventoryItems" buttonLabel="New InventoryItem" buttonTo="newInventoryItem">
        <Route path="/inventory-items/new" page={InventoryItemNewInventoryItemPage} name="newInventoryItem" />
        <Route path="/inventory-items/{id:Int}/edit" page={InventoryItemEditInventoryItemPage} name="editInventoryItem" />
        <Route path="/inventory-items/{id:Int}" page={InventoryItemInventoryItemPage} name="inventoryItem" />
        <Route path="/inventory-items" page={InventoryItemInventoryItemsPage} name="inventoryItems" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
