import { generateUniqueID } from "./generareId.js";

(function () {
  let db;
  let objectStore = null;
  const storeKey = "whiskeyStore";
  const addBtn = document.getElementById("addBtn");
  const updateBtn = document.getElementById("updateBtn");
  const deleteBtn = document.getElementById("deleteBtn");
  const resetBtn = document.getElementById("resetBtn");
  const list = document.querySelector(".wList");

  let DBOpenReq = indexedDB.open("WhiskeyDB", 3);

  DBOpenReq.addEventListener("error", (err) => {
    console.warn(err);
  });
  DBOpenReq.addEventListener("success", (ev) => {
    db = ev.target.result;
    buildList();
  });
  DBOpenReq.addEventListener("upgradeneeded", (ev) => {
    db = ev.target.result;
    console.log(db);

    if (db.objectStoreNames.contains(storeKey)) {
      db.deleteObjectStore(storeKey);
    }
    //create the ObjectStore
    objectStore = db.createObjectStore(storeKey, {
      keyPath: "id",
    });

    // CREATING AN INDEX.......
    objectStore.createIndex("nameIDX", "name", { unique: false });
  });

  resetBtn.addEventListener("click", clearForm);

  updateBtn.addEventListener("click", (ev) => {
    ev.preventDefault();

    let name = document.getElementById("name").value.trim();
    let country = document.getElementById("country").value.trim();
    let age = parseInt(document.getElementById("age").value);
    //id
    let key = document.whiskeyForm.getAttribute("data-key");
    if (key) {
      let whiskey = {
        id: key,
        name,
        country,
        age,
      };
      let tx = makeTX(storeKey, "readwrite");
      tx.oncomplete = (ev) => {
        buildList();
        clearForm();
      };

      let store = tx.objectStore(storeKey);
      let request = store.put(whiskey); //request a put/update

      request.onsuccess = (ev) => {
        console.log("successfully updated an object");
      };
      request.onerror = (err) => {
        console.log("error in request to update");
      };
    }
  });

  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let key = document.whiskeyForm.getAttribute("data-key");
    if (key) {
      let tx = makeTX(storeKey, "readwrite");
      tx.oncomplete = (ev) => {
        buildList();
        clearForm();
      };

      let store = tx.objectStore(storeKey);
      let req = store.delete(key);

      req.onsuccess = (ev) => {
        console.log("Record deleted successfully...");
      };
      req.onerror = (ev) => {
        console.warn("Error in deletion....");
      };
    }
  });

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let country = document.getElementById("country").value.trim();

    let whisky = {
      id: generateUniqueID(),
      name,
      age,
      country,
    };

    let tx = makeTX(storeKey, "readwrite");
    tx.oncomplete = (ev) => {
      buildList();
      clearForm();
    };

    let store = tx.objectStore(storeKey);
    let request = store.add(whisky);
    request.onsuccess = (ev) => {
      console.log("Inserted successfully");
    };
    request.onerror = (err) => {
      console.log("Error in insertion.....");
    };
  });

  list.addEventListener("click", (e) => {
    let li = e.target.closest("[data-key]");
    let id = li.getAttribute("data-key");

    let tx = makeTX(storeKey, "readonly");
    tx.oncomplete = (ev) => {};

    let store = tx.objectStore(storeKey);
    let req = store.get(id);

    req.onsuccess = (ev) => {
      let whiskey = req.result;

      document.getElementById("name").value = whiskey.name;
      document.getElementById("country").value = whiskey.country;
      document.getElementById("age").value = whiskey.age;
      document.whiskeyForm.setAttribute("data-key", whiskey.id);
    };
    req.onerror = (err) => {
      console.warn("Error in fetching single record details....");
    };
  });

  function makeTX(storeName, mode) {
    let tx = db.transaction(storeName, mode);
    tx.onerror = (err) => {
      console.warn(err);
    };

    return tx;
  }

  function clearForm(e) {
    if (e) {
      e.preventDefault();
    }

    document.whiskeyForm.reset();
    document.whiskeyForm.removeAttribute("data-key");
  }

  function buildList() {
    list.innerHTML = `Loading.....`;

    let tx = makeTX(storeKey, "readonly");
    tx.oncomplete = (ev) => {};

    let store = tx.objectStore(storeKey);
    // FETCHING ALL RECORDS BETWEEN 1-10 using true/false
    // true => will not include the respective bound
    // false => will include the respective bound
    let range = IDBKeyRange.bound("A", "Z", false, false);
    let idx = store.index("nameIDX");
    let getReq = idx.getAll(range);

    getReq.onsuccess = (ev) => {
      list.innerHTML = getReq.result
        .map((whiskey) => {
          return `<li data-key="${whiskey.id}"><span>${whiskey.name}</span> ${whiskey.age}</li>`;
        })
        .join("\n");
    };
    getReq.onerror = (err) => {
      console.log("Error while fetching data");
    };
  }
})();
