"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AUTH_USER_REGISTERED_EVENT_NAME: () => AUTH_USER_REGISTERED_EVENT_NAME,
  formatDate: () => formatDate,
  genUUIDReadable: () => genUUIDReadable,
  slugify: () => slugify
});
module.exports = __toCommonJS(index_exports);

// src/events/auth.ts
var AUTH_USER_REGISTERED_EVENT_NAME = "auth.user.registered";

// src/helpers/formatDate.ts
function formatDate(date, locale = "en-US", options) {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error("formatDate: Invalid date provided.");
  }
  const defaultOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    // Use 24-hour format by default
    ...options
    // User-provided options will override defaults
  };
  try {
    return new Intl.DateTimeFormat(locale, defaultOptions).format(date);
  } catch (error) {
    return date.toISOString();
  }
}

// src/helpers/slugify.ts
function slugify(text) {
  if (typeof text !== "string" || text === null || text.trim() === "") {
    return "";
  }
  return text.toString().toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").replace(/--+/g, "-").replace(/^-+|-+$/g, "");
}

// src/helpers/genUUIDReadable.ts
var DEFAULT_SEGMENTS = 3;
var DEFAULT_SEGMENT_LENGTH = 4;
var CHARACTERS = "abcdefghijklmnopqrstuvwxyz0123456789";
function genUUIDReadable(segments = DEFAULT_SEGMENTS, segmentLength = DEFAULT_SEGMENT_LENGTH) {
  if (segments <= 0 || segmentLength <= 0) {
    throw new Error("genUUIDReadable: segments and segmentLength must be positive.");
  }
  let result = "";
  for (let i = 0; i < segments; i++) {
    for (let j = 0; j < segmentLength; j++) {
      result += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
    }
    if (i < segments - 1) {
      result += "-";
    }
  }
  return result;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AUTH_USER_REGISTERED_EVENT_NAME,
  formatDate,
  genUUIDReadable,
  slugify
});
