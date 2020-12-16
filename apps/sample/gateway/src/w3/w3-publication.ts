export class W3Publication {
  event:       string;
  specVersion: SpecVersion;
}

export class SpecVersion {
  status:        string;
  uri:           string;
  date:          string;
  informative:   boolean;
  title:         string;
  shortlink:     string;
  editor_draft:  string;
  process_rules: string;
  _links:        Links;
}

export class Links {
  self:                  Deliverers;
  editors:               Deliverers;
  deliverers:            Deliverers;
  specification:         Deliverers;
  "predecessor-version": Deliverers;
}

export class Deliverers {
  href: string;
}
