
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE IF NOT EXISTS "public"."coffee-grains" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "label" "text",
    "gallery" "text"[],
    "grammage" integer,
    "price" real
);

ALTER TABLE "public"."coffee-grains" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."ground-coffee" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "label" "text",
    "gallery" "text"[],
    "grammge" integer,
    "price" real
);

ALTER TABLE "public"."ground-coffee" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."pods-and-capsules" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "label" "text",
    "gallery" "text"[],
    "quantity" smallint,
    "price" real
);

ALTER TABLE "public"."pods-and-capsules" OWNER TO "postgres";

ALTER TABLE ONLY "public"."coffee-grains"
    ADD CONSTRAINT "coffee-grains_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."ground-coffee"
    ADD CONSTRAINT "ground-coffee_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."pods-and-capsules"
    ADD CONSTRAINT "pods-and-capsules_pkey" PRIMARY KEY ("id");

ALTER TABLE "public"."coffee-grains" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."ground-coffee" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."pods-and-capsules" ENABLE ROW LEVEL SECURITY;

GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON TABLE "public"."coffee-grains" TO "anon";
GRANT ALL ON TABLE "public"."coffee-grains" TO "authenticated";
GRANT ALL ON TABLE "public"."coffee-grains" TO "service_role";

GRANT ALL ON TABLE "public"."ground-coffee" TO "anon";
GRANT ALL ON TABLE "public"."ground-coffee" TO "authenticated";
GRANT ALL ON TABLE "public"."ground-coffee" TO "service_role";

GRANT ALL ON TABLE "public"."pods-and-capsules" TO "anon";
GRANT ALL ON TABLE "public"."pods-and-capsules" TO "authenticated";
GRANT ALL ON TABLE "public"."pods-and-capsules" TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";

RESET ALL;
