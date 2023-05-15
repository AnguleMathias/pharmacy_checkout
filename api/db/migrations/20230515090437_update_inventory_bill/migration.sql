-- CreateTable
CREATE TABLE "InventoryItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "quantity" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "pharmacistProfileId" INTEGER NOT NULL,
    "billId" INTEGER,
    CONSTRAINT "InventoryItem_pharmacistProfileId_fkey" FOREIGN KEY ("pharmacistProfileId") REFERENCES "PharmacistProfile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "InventoryItem_billId_fkey" FOREIGN KEY ("billId") REFERENCES "Bill" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Bill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "total" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "customerProfileId" INTEGER,
    CONSTRAINT "Bill_customerProfileId_fkey" FOREIGN KEY ("customerProfileId") REFERENCES "CustomerProfile" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
