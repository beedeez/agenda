// old common js export (see index.ts for module exports)
// Keeps the agenda@4 surface: consumers do `import Agenda, { Job, JobPriority } from "agenda"`,
// and JobPriority is a runtime enum, so it has to stay on module.exports.

import { Agenda } from "./agenda";
import * as api from "./index";

module.exports = Agenda;
Object.assign(module.exports, api);
