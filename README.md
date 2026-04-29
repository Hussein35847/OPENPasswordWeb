# 🌐 OpenLock Web

**OpenLock Web** is the browser-based version of **OpenLock**, a privacy-first password manager and TOTP (2FA) authenticator.

> 🔐 Fully client-side — no servers, no tracking, no data leaves your device.

---

## ✨ Features

* 🔑 **Password Manager**

  * Store and manage credentials securely
  * Fast copy & clean UI

* 🔐 **TOTP Generator (2FA)**

  * Generate 6-digit authentication codes
  * 30-second refresh timer

* 🔒 **End-to-End Encryption**

  * AES-GCM via Web Crypto API
  * Master password protected

* 💾 **Local Storage Only**

  * Runs entirely in your browser
  * No backend or cloud

* 🔄 **Manual Sync (Secure Backup)**

  * Export encrypted vault file
  * Import on any device

---

## 🧩 How It Works

* All data is encrypted locally using your master password
* Nothing is sent to any server
* You control your data completely

---

## ⚙️ Usage

### 🔐 First Setup

* Set a master password
* This is required to unlock your vault

### 🔑 Add Password

* Enter site + username + password
* Save securely

### 🔐 Add TOTP

* Enter secret key
* Codes generate automatically


---

## 🔄 Backup & Restore

### Export

* Download encrypted `.json` file

### Import

* Upload file + enter master password

> 💡 Tip: Store backups in your own cloud (Drive, Dropbox, USB)

---

## 🔐 Security

* AES-GCM encryption
* PBKDF2 key derivation
* Unique IV per encryption
* No plaintext storage
* No master password storage

> ⚠️ If you lose your master password, your data cannot be recovered.

---

## 🔥 Vision

> Build secure tools that work entirely on the client — no trust required.
