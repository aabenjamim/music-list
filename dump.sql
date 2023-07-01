--
-- PostgreSQL database dump
--

-- Dumped from database version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: playlist; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.playlist (
    id integer NOT NULL,
    title text NOT NULL,
    by text NOT NULL
);


--
-- Name: playlist_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.playlist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: playlist_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.playlist_id_seq OWNED BY public.playlist.id;


--
-- Name: playlist id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.playlist ALTER COLUMN id SET DEFAULT nextval('public.playlist_id_seq'::regclass);


--
-- Data for Name: playlist; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.playlist VALUES (1, 'Symphony', 'Imagine Dragons');
INSERT INTO public.playlist VALUES (2, 'Life Goes On', 'Ed Sheeran');
INSERT INTO public.playlist VALUES (3, 'Fix You', 'Coldplay');
INSERT INTO public.playlist VALUES (4, 'Lonely', 'Imagine Dragons');
INSERT INTO public.playlist VALUES (5, 'Boat', 'Ed Sheeran');
INSERT INTO public.playlist VALUES (6, 'Simple Song', 'The Shins');


--
-- Name: playlist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.playlist_id_seq', 7, true);


--
-- Name: playlist playlist_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.playlist
    ADD CONSTRAINT playlist_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

