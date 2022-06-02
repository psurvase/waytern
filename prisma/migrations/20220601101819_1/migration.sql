-- CreateTable
CREATE TABLE "tb_account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "oauth_token_secret" TEXT,
    "oauth_token" TEXT,
    CONSTRAINT "tb_account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "tb_user" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tb_session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" DATETIME NOT NULL,
    CONSTRAINT "tb_session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "tb_user" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tb_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "address" TEXT,
    "street_address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zip_code" TEXT,
    "country" TEXT,
    "phone" TEXT,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "tb_verification_token" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "TB_SITE" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "CREATED_AT" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UPDATED_AT" DATETIME NOT NULL,
    "NAME" TEXT,
    "STREET_ADDRESS" TEXT,
    "COUNTRY" TEXT,
    "CITY" TEXT,
    "PIN_CODE" TEXT,
    "IMAGES" TEXT
);

-- CreateTable
CREATE TABLE "TB_DEVICE" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "CREATED_AT" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UPDATED_AT" DATETIME NOT NULL,
    "NAME" TEXT,
    "STATUS" BOOLEAN,
    "X_COORDINATE" REAL,
    "Y_COORDINATE" REAL,
    "MAC_ID" TEXT
);

-- CreateTable
CREATE TABLE "TB_MESSAGE" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "CREATED_AT" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UPDATED_AT" DATETIME NOT NULL,
    "MESSAGE" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_account_provider_providerAccountId_key" ON "tb_account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "tb_session_sessionToken_key" ON "tb_session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "tb_user_email_key" ON "tb_user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tb_verification_token_token_key" ON "tb_verification_token"("token");

-- CreateIndex
CREATE UNIQUE INDEX "tb_verification_token_identifier_token_key" ON "tb_verification_token"("identifier", "token");
