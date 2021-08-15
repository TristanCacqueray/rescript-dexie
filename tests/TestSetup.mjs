// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as Table from "../src/Table.mjs";
import Dexie from "dexie";
import * as DexieVersion from "../src/DexieVersion.mjs";
import FDBFactoryJs from "fake-indexeddb/lib/FDBFactory.js";
import FDBKeyRangeJs from "fake-indexeddb/lib/FDBKeyRange.js";

function p(prim0, prim1) {
  return prim0.then(Curry.__1(prim1));
}

function pt(prim0, prim1) {
  return prim0.then(Curry.__1(prim1));
}

function setup(param) {
  var idb = new FDBFactoryJs();
  var dexie = new Dexie("hello dexie", {
        indexedDB: idb,
        IDBKeyRange: FDBKeyRangeJs
      });
  var schema = [
    [
      "friends",
      "++id,name,birthdate,color"
    ],
    [
      "pets",
      "++id,name,kind"
    ]
  ];
  DexieVersion.upgrade(DexieVersion.stores(dexie.version(1), schema), (function (_tx) {
          
        }));
  dexie.open();
  return dexie;
}

function friendFixture(dexie) {
  var friends = dexie.table("friends");
  var prim0 = Table.bulkPut(friends, [
        {
          id: 1,
          name: "Chris",
          color: "Red"
        },
        {
          id: 2,
          name: "Leroy",
          color: "Blue"
        },
        {
          id: 3,
          name: "Jerome",
          color: "Purple"
        },
        {
          id: 4,
          name: "Betty",
          color: "Purple"
        },
        {
          id: 5,
          name: "Xiao",
          color: "Blue"
        },
        {
          id: 6,
          name: "Rohan",
          color: "Red"
        },
        {
          id: 7,
          name: "Natalia",
          color: "Red"
        },
        {
          id: 8,
          name: "Padma",
          color: "Purple"
        }
      ]);
  return prim0.then(function (param) {
              return friends;
            });
}

export {
  p ,
  pt ,
  setup ,
  friendFixture ,
  
}
/* dexie Not a pure module */