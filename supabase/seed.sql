-- ---------------------------------------------------------------------------
-- Seed data
-- ---------------------------------------------------------------------------
-- Idempotent: singleton rows are upserted; list tables are truncated then
-- re-inserted. Run after schema.sql. This is the source of truth for initial
-- content — edit freely in the Supabase dashboard afterwards; the site and AI
-- assistant read live from these tables.
-- ---------------------------------------------------------------------------

-- Profile -------------------------------------------------------------------
insert into profile (id, "name", "title", "location", "email", "linkedin", "github", "resumeUrl")
values (
  1,
  'Alex Kaiser',
  'Software & Hardware Engineer',
  'Raleigh, North Carolina',
  'alexkaiser@me.com',
  'https://www.linkedin.com/in/alex-kaiser34/',
  'https://github.com/alexkaiser34',
  '/files/Alex_Kaiser_Resume.pdf'
)
on conflict (id) do update set
  "name" = excluded."name",
  "title" = excluded."title",
  "location" = excluded."location",
  "email" = excluded."email",
  "linkedin" = excluded."linkedin",
  "github" = excluded."github",
  "resumeUrl" = excluded."resumeUrl";

-- About ---------------------------------------------------------------------
insert into about (id, "paragraphs")
values (
  1,
  array[
    $p$I'm a software and hardware engineer currently based in Raleigh, North Carolina. My work spans full-stack web applications, embedded systems, FPGA design, and printed circuit boards — I enjoy problems that live at the intersection of hardware and software.$p$,
    $p$I'm a self-motivated problem solver who learns and adapts quickly. With experience designing complex software in over ten different languages and two years of professional engineering experience at DornerWorks, I bring a diversified perspective to challenging engineering problems.$p$,
    $p$I'm always eager to learn, grow, and challenge myself to expand my skill set, and I'm currently seeking a full-time engineering position where I can put that curiosity to work.$p$
  ]
)
on conflict (id) do update set "paragraphs" = excluded."paragraphs";

truncate about_stats restart identity;
insert into about_stats ("value", "label", "sortOrder") values
  ('10+', 'Languages', 0),
  ('2', 'Engineering degrees', 1),
  ('4+', 'Years experience', 2);

-- Expertise -----------------------------------------------------------------
truncate expertise restart identity;
insert into expertise ("title", "description", "icon", "sortOrder") values
  ('Embedded Software & Firmware', 'Developing embedded software, firmware, and low-level drivers for embedded systems and real-time operating systems.', 'Cpu', 0),
  ('AI Tooling & Agentic Systems', 'Integrating AI into applications and engineering workflows, and building AI tools and agents for focused engineering and business needs.', 'Sparkles', 1),
  ('FPGA, Hardware & PCB Design', 'Designing FPGA-based systems, digital hardware, and printed circuit boards, with experience taking hardware from initial design through implementation and testing.', 'CircuitBoard', 2),
  ('Full-Stack Application Development', 'Designing and building full-stack applications, internal engineering tools, APIs, databases, and user interfaces.', 'Boxes', 3),
  ('Product & Project Management', 'Helping define features, requirements, and project scope, organizing technical work, and using engineering and business context to make well-informed decisions throughout a project.', 'ClipboardList', 4),
  ('Technical Leadership', 'Taking ownership of technical work, helping guide engineering decisions, communicating across teams, and keeping projects focused on the right technical goals.', 'Users', 5);

-- Skills --------------------------------------------------------------------
truncate skill_groups restart identity;
insert into skill_groups ("label", "items", "sortOrder") values
  ('Languages', array['Python', 'TypeScript', 'JavaScript', 'C', 'C++', 'C#', 'VHDL', 'Verilog', 'Assembly'], 0),
  ('AI & Agentic Systems', array['LLM APIs & Integrations', 'AI Agents', 'Agent Harnesses & Loops', 'Tool Calling', 'RAG & Hybrid Search', 'Microsoft Agent Framework', 'Azure AI Foundry', 'LangChain'], 1),
  ('Backend & Infrastructure', array['FastAPI', 'Node.js', '.NET / ASP.NET', 'REST APIs', 'Docker', 'AWS', 'CI/CD', 'Git'], 2),
  ('Databases', array['PostgreSQL', 'MySQL', 'SQLite', 'Qdrant', 'InfluxDB'], 3),
  ('Frontend & Desktop', array['React', 'Tailwind CSS', 'HTML & CSS', 'Electron'], 4),
  ('Embedded, FPGA & Hardware', array['Firmware', 'Low-Level Drivers', 'Kernel Drivers', 'RTOS', 'Embedded Linux', 'FPGA Design', 'PCB Design', 'Digital Design', 'seL4 / Hypervisors', 'Valgrind', 'QEMU'], 5);

truncate soft_skills restart identity;
insert into soft_skills ("title", "description", "icon", "sortOrder") values
  ('Project Management', 'Strong communication and leadership skills to manage teams effectively and meet a wide variety of customer needs.', 'ClipboardList', 0),
  ('Design Thinking', 'Combining an engineering and business mindset to develop unique solutions to a broad range of complex problems.', 'Lightbulb', 1),
  ('Diversified Knowledge', 'Intertwining electrical engineering, computer engineering, and business knowledge to strategize diverse solutions.', 'Layers', 2),
  ('Software Design', 'Leveraging deep experience with many programming languages and tools to implement methodical software solutions.', 'Code2', 3),
  ('Client Interaction', 'Considerable experience communicating with clients to establish and build strong professional relationships.', 'MessageSquare', 4);

-- Recommendations -----------------------------------------------------------
truncate recommendations restart identity;
insert into recommendations ("initials", "name", "title", "description", "fileKey", "sortOrder") values
  ('BK', 'Professor Brian Krug', 'GVSU Professor', 'Letter of recommendation from my professor at Grand Valley State University, highlighting my academic achievements and research contributions.', 'school', 0),
  ('JV', 'Jake Vande Brake, PMP, ACP', 'DornerWorks Engineering Project Manager', 'Recommendation focusing on my work with FPGA development and embedded systems during my time at DornerWorks.', 'fpga', 1),
  ('DV', 'David Van Duinen', 'DornerWorks Engineering Project Manager', 'Professional recommendation highlighting my contributions to secure technology projects and software development.', 'secureTech', 2);

-- Resume: work experience ---------------------------------------------------
truncate work_experience restart identity;
insert into work_experience ("company", "role", "period", "location", "description", "points", "tech", "sortOrder") values
  (
    'Itron Inc.',
    'Embedded Software Engineer',
    'Apr 2024 — Present',
    'Raleigh, NC',
    'Embedded software engineering for smart electric metering — improving performance, reliability, and internal tooling.',
    array[
      'Optimized embedded software with C++ and SQLite, ensuring performance and design compliance.',
      'Resolved critical software issues through root cause analysis, improving system stability.',
      'Enhanced CPU efficiency by profiling and refactoring code, presenting optimizations to leadership.',
      'Developed and optimized desktop applications in ASP.NET, improving functionality and performance.'
    ],
    array['C++', 'SQLite', 'ASP.NET', 'Embedded'],
    0
  ),
  (
    'DornerWorks Ltd.',
    'Software Engineer Co-op — FPGA / Secure Tech',
    'May 2021 — Aug 2023',
    'Grand Rapids, MI',
    'FPGA and secure-technology engineering — leading a team building hypervisor demos, embedded drivers, and full-stack tooling.',
    array[
      'Managed a team of engineers to design an application demonstrating hypervisor benefits.',
      'Designed embedded hardware and software drivers using VHDL, C, Python, and the AMBA AXI protocol.',
      'Accelerated machine learning algorithms by 100x through collaborative optimization.',
      'Built full-stack desktop applications with React, TypeScript, and Python, enhancing UX.'
    ],
    array['VHDL', 'C', 'Python', 'React', 'TypeScript'],
    1
  );

-- Resume: education ---------------------------------------------------------
truncate education restart identity;
insert into education ("school", "degree", "period", "location", "link", "points", "sortOrder") values
  (
    'Grand Valley State University',
    'B.S. Electrical Engineering · B.S. Computer Engineering',
    'Aug 2018 — Jan 2024',
    'Allendale, MI',
    'https://www.gvsu.edu/',
    array[
      'Minor in Business Administration',
      'Frederik Meijer Honors College',
      'Tau Beta Pi Engineering Honors Society',
      $pt$Dean's List every semester$pt$,
      'Maintained a 3.9 GPA'
    ],
    0
  );

-- Personal (narrative content for the AI assistant) -------------------------
-- NOTE: Edit this to reflect the real details you want the assistant to share.
insert into personal (id, "headline", "bio", "origin", "interests", "availability", "workPreferences")
values (
  1,
  'Alex Kaiser — a software and hardware engineer who works across the full stack and down to the silicon.',
  $bio$Alex is a software and hardware engineer based in Raleigh, North Carolina. He holds dual B.S. degrees in Electrical Engineering and Computer Engineering from Grand Valley State University, plus a minor in Business Administration. His experience ranges from full-stack web development and embedded firmware to FPGA and electrical design, and increasingly AI tooling and integrations. Alex enjoys problems that sit at the intersection of hardware and software, and brings a diversified, business-aware perspective to engineering challenges.$bio$,
  'Originally from Michigan; now based in Raleigh, North Carolina.',
  array[
    'Building side projects at the hardware/software boundary',
    'Electronics, FPGAs, and embedded tinkering',
    'Exploring LLMs and AI tooling',
    'Learning new programming languages'
  ],
  'Currently open to new full-time engineering opportunities. The best way to reach out is directly by email.',
  array[
    'Full-stack engineering',
    'Embedded and firmware engineering',
    'FPGA / electrical design',
    'AI tooling and LLM integrations',
    'Open to remote and hybrid roles'
  ]
)
on conflict (id) do update set
  "headline" = excluded."headline",
  "bio" = excluded."bio",
  "origin" = excluded."origin",
  "interests" = excluded."interests",
  "availability" = excluded."availability",
  "workPreferences" = excluded."workPreferences";

-- Projects ------------------------------------------------------------------
-- Import your existing projects here (previously served from DynamoDB).
-- Example row shape:
-- insert into projects ("id", "title", "role", "category", "alignment", "timeline",
--   "image", "shortDescription", "longDescription", "contributions", "responsibilities",
--   "company", "sortOrder")
-- values (
--   'project-slug', 'Project Title', 'Lead Engineer', 'Embedded', 'High', '2023',
--   'https://.../image.png', 'Short summary.', 'Longer description.',
--   array['Contribution 1', 'Contribution 2'],
--   array['Responsibility 1'], 'Company Name', 0
-- );
