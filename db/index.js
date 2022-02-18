import pg from "pg";
const connectionString =
  "postgres://cxsrgyvtbvsftt:f6ccaf0c9630644d38c79edea2d252c6b57b5cc64b5b90b3dd406960ed89a98f@ec2-54-74-14-109.eu-west-1.compute.amazonaws.com:5432/d9m0g948tuv6mg";

const pool = pg.Pool({
  connectionString,
});

export default function query(text, params) {
  return pool.query(text, params);
}
