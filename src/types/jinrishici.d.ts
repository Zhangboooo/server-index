interface JinRiShiCiResData {
  id: string;
  content: string;
  popularity: number;
  origin: JinRiShiCiResOrigin;
  matchTags: string[];
  recommendedReason: string;
  cacheAt: string;
}

interface JinRiShiCiResOrigin {
  title: string;
  dynasty: string;
  author: string;
  content: string[];
  translate: string;
}

interface JinRiShiCiRes {
  status: string;
  data: JinRiShiCiResData;
  token: string;
  ipAddress: string;
  warning: string;
}



declare module 'jinrishici' {
  let load: (cb: (result: JinRiShiCiRes) => void) => void;
}

