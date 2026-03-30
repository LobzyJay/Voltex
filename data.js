/**
 * VOLTEX — Site Content Data
 * All copy, labels, stats and link content lives here.
 * Update this file to change text anywhere on the page.
 */
window.VOLTEX = {

  /* ── Navigation ─────────────────────────────────────────── */
  nav: [
    { label: 'Infrastructure', href: '#pole-section'  },
    { label: 'Technology',     href: '#bento-section' },
    { label: 'About',          href: '#about-section' }
  ],

  /* Mobile overlay nav — different order + numbered */
  overlayNav: [
    { label: 'Technology',     href: '#bento-section', num: '01' },
    { label: 'Infrastructure', href: '#pole-section',  num: '02' },
    { label: 'About',          href: '#about-section', num: '03' }
  ],

  /* ── Hero ────────────────────────────────────────────────── */
  hero: {
    eyebrow:  'Physical Infrastructure · On-Chain Settlement · NEM Verified',
    h1:       ['Powering', '<em>the Network</em>'],
    sub:      'Physical grid infrastructure owned by node operators, verified on-chain. VOLTEX is the protocol connecting Australia\'s energy network to decentralised settlement.',
    ctas: [
      { label: 'Explore Protocol', style: 'btn-p', target: 'bento-section' },
      { label: 'Run a Node',       style: 'btn-g', target: 'about-section' }
    ]
  },

  /* ── Infrastructure Phases ───────────────────────────────── */
  phases: [
    {
      num:   '01',
      label: 'Structure',
      title: 'Engineered<br>to <em>endure</em>',
      body:  'Galvanised steel lattice rated to AS/NZS 7000, Wind Region D. Each structure hosts a telemetry node. Uptime, load and environmental data attested on-chain every 60 seconds.',
      stats: [
        { n: '18<em>m</em>',    label: 'Height'          },
        { n: '50<em>yr</em>',   label: 'Design Life'     },
        { n: '60<em>s</em>',    label: 'Attest Interval' }
      ]
    },
    {
      num:   '02',
      label: 'Capacity',
      title: '132,000<br><em>volts</em> live',
      body:  '132kV AEMO-compliant transmission along the Hunter Valley corridor. Line capacity, power factor and thermal load metered at each node and written to the protocol in real time.',
      stats: [
        { n: '132<em>kV</em>',  label: 'Line Voltage'  },
        { n: '340<em>km</em>',  label: 'NEM Corridor'  },
        { n: '480<em>K</em>',   label: 'Homes Served'  }
      ]
    },
    {
      num:   '03',
      label: 'Reliability',
      title: 'Fault detected.<br><em>Protocol</em> notified.',
      body:  'Each node monitors thermal load, sag and environmental risk continuously. A fault event triggers an on-chain alert 400ms before circuit breakers fire, protecting operator uptime scores that determine VLTX reward rates.',
      stats: [
        { n: '400<em>ms</em>',  label: 'Fault Detect'    },
        { n: '99.97<em>%</em>', label: 'Uptime SLA'      },
        { n: '24<em>/7</em>',   label: 'Live Monitoring' }
      ]
    },
    {
      num:   '04',
      label: 'Network',
      title: 'Not a pole.<br>A <em>node</em>.',
      body:  'Every structure in the corridor runs a telemetry node. Load, temperature, sag and bushfire risk — written to the protocol every 60 seconds. Node operators earn VLTX proportional to verified uptime. 2,400 nodes. One living network.',
      stats: [
        { n: '2,400',           label: 'Active Nodes'  },
        { n: 'VLTX',            label: 'Reward Token'  },
        { n: '60<em>s</em>',    label: 'Write Interval'}
      ]
    }
  ],

  /* ── Technology Bento Cards ──────────────────────────────── */
  bento: [
    {
      id:    'bc-flow',
      cv:    'cv-flow',
      label: '01 · On-Chain Flow',
      name:  'Energy Flow <em>Live</em>',
      desc:  '132kV across the Hunter Valley NEM corridor. Transfer data metered at every node, settlements executed automatically on-protocol.'
    },
    {
      id:    'bc-nodes',
      cv:    'cv-nodes',
      label: '02 · Node Network',
      name:  '<em>2,400</em> Active Nodes',
      desc:  '2,400 monitoring nodes across 340km of NEM corridor. Each earning VLTX rewards proportional to verified uptime.'
    },
    {
      id:    'bc-freq',
      cv:    'cv-freq',
      label: '03 · Protocol Frequency',
      name:  '<em>50.00</em> Hz NEM',
      desc:  '50Hz standard monitored at every node, attested on-chain. Hover to simulate a demand spike. Protocol flags deviation in 400ms.'
    },
    {
      id:    'bc-load',
      cv:    'cv-load',
      label: '04 · Network Capacity',
      name:  'Corridor <em>Load</em>',
      desc:  'Real-time load across the 340km corridor. Hover to simulate summer peak. On-chain SLA enforcement activates at threshold breach.'
    },
    {
      id:    'bc-voltage',
      cv:    'cv-voltage',
      label: '05 · Distribution Layer',
      name:  '132kV → <em>415V</em>',
      desc:  'Three-stage step-down across the distribution network. Loss factor below 0.8%. Each stage metered and attested on-protocol.'
    }
  ],

  /* ── About Section ───────────────────────────────────────── */
  about: {
    tag:  'About VOLTEX AU',
    sub:  'DePIN · Sydney, AU',

    mission: [
      'Infrastructure',
      'owned by the',
      'people who',
      '<em>run it.</em>'
    ],

    /* n = inner HTML of .about-stat-n (preserves em / span formatting) */
    stats: [
      { n: '2,400',                                                          label: 'Active Nodes'               },
      { n: '<em>340</em><span style="font-size:.5em">km</span>',             label: 'NEM Corridor'               },
      { n: '<em>2030</em>',                                                  label: 'Full Corridor Target'        },
      { n: '<em>$340M</em>',                                                 label: 'Infrastructure Committed'   }
    ],

    body: [
      [
        'VOLTEX is a DePIN protocol that deploys physical grid-monitoring infrastructure across Australia\'s National Electricity Market, starting with a 340km corridor from Newcastle to Tamworth through the Hunter Valley.',
        'Each structure in the network hosts a telemetry node. Load, temperature, sag and fault risk — metered every 60 seconds and written to the protocol.'
      ],
      [
        'Node operators earn VLTX rewards proportional to verified uptime. The economic incentive is aligned directly with physical grid reliability.',
        'Every structure is built to AS/NZS 7000, rated for Wind Region D, with a 50-year design life. On-chain SLAs enforce performance, not paper contracts.'
      ]
    ],

    offices: ['Sydney', 'Newcastle', 'Tamworth', 'Hunter Valley']
  },

  /* ── Ticker ─────────────────────────────────────────────── */
  ticker: [
    '2,400 Nodes',
    'VLTX Rewards',
    '340km Corridor',
    'On-Chain Verified',
    'NEM Compliant',
    '99.97% Uptime',
    'Hunter Valley',
    '400ms Fault Detect'
  ],

  /* ── Footer ──────────────────────────────────────────────── */
  footer: {
    tagline: 'Physical grid infrastructure. On-chain settlement. Node rewards. Starting with the Hunter Valley NEM corridor.',
    links: [
      {
        title: 'Protocol',
        items: [
          { label: 'Run a Node',       href: '#' },
          { label: 'Token Economics',  href: '#' },
          { label: 'Protocol Docs',    href: '#' },
          { label: 'Whitepaper',       href: '#' }
        ]
      },
      {
        title: 'Company',
        items: [
          { label: 'About VOLTEX', href: '#about-section', cls: 'nav-link' },
          { label: 'Careers',      href: '#' },
          { label: 'Blog',         href: '#' },
          { label: 'GitHub',       href: 'https://github.com/LobzyJay/Voltex' }
        ]
      }
    ],
    copyright: '© 2025 VOLTEX Grid Protocol Pty Ltd · Sydney NSW 2000 · ABN 00 000 000 000',
    coords:    'SYS · 33.87°S · 151.21°E · SYDNEY',
    build:     'BUILD 2024.03'
  },

  /* ── Live Simulation Parameters ──────────────────────────── */
  sim: {
    freqBase:  50.00,
    freqRange: 0.04,   /* ±Hz variance */
    loadBase:  72,
    loadRange: 6,      /* ±% variance */
    updateMs:  900
  }

};
