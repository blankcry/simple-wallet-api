export default {
  payout: {
    transaction: {
      caps: {
        type: Object,
        required: true,
        default: { NGN: { verified: '58000000', unverified: '580000' }, USD: { verified: '100000', unverified: '1000' } },
      },
      methods: {
        type: Array,
        required: true,
        default: [
          {
            label: 'International Wire (US Only)',
            value: 'ach',
            description: 'Pay via ACH to US bank account',
            duration: {
              min: 1,
              max: 3,
              unit: 'days',
              description: '1-3 days',
            },
            fee: '0',
          },
          {
            label: 'International Wire (Other Countries)',
            value: 'wire',
            description: 'Pay via wire transfer',
            duration: {
              min: 1,
              max: 3,
              unit: 'days',
              description: '1-3 days',
            },
            fee: '0',
            countries: ['ph', 'au', 'in', 'ru', 'za'],
          },
        ],
      },
      fee: {
        type: Array,
        required: true,
        default: ['USD', 50],
      },
    },
    purpose: {
      recipient_types: {
        type: Array,
        required: true,
        default: [
          {
            label: 'Individual',
            value: 'individual',
            description: 'Pay to an individual',
          },
          {
            label: 'Company',
            value: 'company',
            description: 'Pay to a company',
          },
          {
            label: 'Government',
            value: 'government',
            description: 'Pay to a government',
          },
          {
            label: 'Others',
            value: 'others',
            description: 'Pay to others',
          },
        ],
      },
    },
  },
  exchange: {
    currency: {
      pairs: {
        type: Object,
        required: true,
        default: { 'USD-NGN': '615' },
      },
      supported: {
        type: Array,
        required: true,
        default: [
          {
            alpha2: 'US',
            alpha3: 'USD',
            name: 'United States',
            currency: 'USD',
            currency_symbol: '$',
          },
        ],
      },
    },
    country: {
      supported: {
        type: Array,
        required: true,
        default: [
          {
            alpha2: 'AO', alpha3: 'AGO', name: 'Angola', currency_symbol: 'Kz',
          }, {
            alpha2: 'AI', alpha3: 'AIA', name: 'Anguilla', currency_symbol: '$',
          }, {
            alpha2: 'AG', alpha3: 'ATG', name: 'Antigua and Barbuda', currency_symbol: '$',
          }, {
            alpha2: 'AR', alpha3: 'ARG', name: 'Argentina', currency_symbol: '$',
          }, {
            alpha2: 'AM', alpha3: 'ARM', name: 'Armenia', currency_symbol: 'Դ',
          }, {
            alpha2: 'AW', alpha3: 'ABW', name: 'Aruba', currency_symbol: 'ƒ',
          }, {
            alpha2: 'AU', alpha3: 'AUS', name: 'Australia', currency_symbol: '$',
          }, {
            alpha2: 'AT', alpha3: 'AUT', name: 'Austria', currency_symbol: '€',
          }, {
            alpha2: 'AZ', alpha3: 'AZE', name: 'Azerbaijan', currency_symbol: 'ман',
          }, {
            alpha2: 'BH', alpha3: 'BHR', name: 'Bahrain', currency_symbol: 'ب.د',
          }, {
            alpha2: 'BD', alpha3: 'BGD', name: 'Banglades', currency_symbol: '৳',
          }, {
            alpha2: 'BB', alpha3: 'BRB', name: 'Barbados', currency_symbol: '$',
          }, {
            alpha2: 'BE', alpha3: 'BEL', name: 'Belgium', currency_symbol: '€',
          }, {
            alpha2: 'BZ', alpha3: 'BLZ', name: 'Belize', currency_symbol: '$',
          }, {
            alpha2: 'BJ', alpha3: 'BEN', name: 'Benin', currency_symbol: '',
          }, {
            alpha2: 'BM', alpha3: 'BMU', name: 'Bermuda', currency_symbol: '$',
          }, {
            alpha2: 'BT', alpha3: 'BTN', name: 'Bhutan', currency_symbol: '',
          }, {
            alpha2: 'BA', alpha3: 'BIH', name: 'Bosnia-Herzegovina', currency_symbol: 'КМ',
          }, {
            alpha2: 'BR', alpha3: 'BRA', name: 'Brazil', currency_symbol: 'R$',
          }, {
            alpha2: 'BN', alpha3: 'BRN', name: 'Brunei Darussalam', currency_symbol: '$',
          }, {
            alpha2: 'BG', alpha3: 'BGR', name: 'Bulgaria', currency_symbol: 'лв',
          }, {
            alpha2: 'BF', alpha3: 'BFA', name: 'Burkina Faso', currency_symbol: '',
          }, {
            alpha2: 'CM', alpha3: 'CMR', name: 'Cameroon', currency_symbol: '₣',
          }, {
            alpha2: 'CA', alpha3: 'CAN', name: 'Canada', currency_symbol: '$',
          }, {
            alpha2: 'KY', alpha3: 'CYM', name: 'Cayman Islands', currency_symbol: '$',
          }, {
            alpha2: 'TD', alpha3: 'TCD', name: 'Chad', currency_symbol: '₣',
          }, {
            alpha2: 'CL', alpha3: 'CHL', name: 'Chile', currency_symbol: '$',
          }, {
            alpha2: 'CN', alpha3: 'CHN', name: 'China', currency_symbol: '¥',
          }, {
            alpha2: 'CO', alpha3: 'COL', name: 'Colombia', currency_symbol: '$',
          }, {
            alpha2: 'CD', alpha3: 'COD', name: 'Democratic Republic of Congo (Kinshasa-Zaire)', currency_symbol: '₣',
          }, {
            alpha2: 'CK', alpha3: 'COK', name: 'Cook Islands', currency_symbol: '$',
          }, {
            alpha2: 'CR', alpha3: 'CRI', name: 'Costa Rica', currency_symbol: '₡',
          }, {
            alpha2: 'HR', alpha3: 'HRV', name: 'Croatia', currency_symbol: 'Kn',
          }, {
            alpha2: 'CY', alpha3: 'CYP', name: 'Cyprus', currency_symbol: '€',
          }, {
            alpha2: 'DK', alpha3: 'DNK', name: 'Denmark', currency_symbol: 'kr',
          }, {
            alpha2: 'DJ', alpha3: 'DJI', name: 'Djibouti', currency_symbol: '₣',
          }, {
            alpha2: 'DM', alpha3: 'DMA', name: 'Dominica', currency_symbol: '$',
          }, {
            alpha2: 'EC', alpha3: 'ECU', name: 'Ecuador', currency_symbol: '$',
          }, {
            alpha2: 'EG', alpha3: 'EGY', name: 'Egypt', currency_symbol: '£',
          }, {
            alpha2: 'SV', alpha3: 'SLV', name: 'El Salvador', currency_symbol: '',
          }, {
            alpha2: 'EE', alpha3: 'EST', name: 'Estonia', currency_symbol: '€',
          }, {
            alpha2: 'SZ', alpha3: 'SWZ', name: 'Swaziland', currency_symbol: 'L',
          }, {
            alpha2: 'FJ', alpha3: 'FJI', name: 'Fiji', currency_symbol: '$',
          }, {
            alpha2: 'FI', alpha3: 'FIN', name: 'Finland', currency_symbol: '€',
          }, {
            alpha2: 'FR', alpha3: 'FRA', name: 'France', currency_symbol: '€',
          }, {
            alpha2: 'GF', alpha3: 'GUF', name: 'French Guiana', currency_symbol: '€',
          }, {
            alpha2: 'PF', alpha3: 'PYF', name: 'French Polynesia', currency_symbol: '₣',
          }, {
            alpha2: 'GA', alpha3: 'GAB', name: 'Gabon', currency_symbol: '₣',
          }, {
            alpha2: 'GM', alpha3: 'GMB', name: 'Gambia', currency_symbol: 'D',
          }, {
            alpha2: 'GE', alpha3: 'GEO', name: 'Georgia', currency_symbol: 'ლ',
          }, {
            alpha2: 'DE', alpha3: 'DEU', name: 'Germany', currency_symbol: '€',
          }, {
            alpha2: 'GH', alpha3: 'GHA', name: 'Ghana', currency_symbol: '₵',
          }, {
            alpha2: 'GI', alpha3: 'GIB', name: 'Gibraltar', currency_symbol: '£',
          }, {
            alpha2: 'GR', alpha3: 'GRC', name: 'Greece', currency_symbol: '€',
          }, {
            alpha2: 'GL', alpha3: 'GRL', name: 'Greenland (Denmark)', currency_symbol: 'kr',
          }, {
            alpha2: 'GD', alpha3: 'GRD', name: 'Grenada', currency_symbol: '$',
          }, {
            alpha2: 'GP', alpha3: 'GLP', name: 'Guadaloupe', currency_symbol: '€',
          }, {
            alpha2: 'GT', alpha3: 'GTM', name: 'Guatemala', currency_symbol: 'Q',
          }, {
            alpha2: 'GG', alpha3: 'GGY', name: 'Guernsey', currency_symbol: '',
          }, {
            alpha2: 'HN', alpha3: 'HND', name: 'Honduras', currency_symbol: 'L',
          }, {
            alpha2: 'HK', alpha3: 'HKG', name: 'Hong Kong', currency_symbol: '$',
          }, {
            alpha2: 'HU', alpha3: 'HUN', name: 'Hungary', currency_symbol: 'Ft',
          }, {
            alpha2: 'IS', alpha3: 'ISL', name: 'Iceland', currency_symbol: 'Kr',
          }, {
            alpha2: 'IN', alpha3: 'IND', name: 'India', currency_symbol: '₹',
          }, {
            alpha2: 'ID', alpha3: 'IDN', name: 'Indonesia', currency_symbol: 'Rp',
          }, {
            alpha2: 'IE', alpha3: 'IRL', name: 'Ireland', currency_symbol: '€',
          }, {
            alpha2: 'IL', alpha3: 'ISR', name: 'Israel', currency_symbol: '₪',
          }, {
            alpha2: 'IT', alpha3: 'ITA', name: 'Italy', currency_symbol: '€',
          }, {
            alpha2: 'JM', alpha3: 'JAM', name: 'Jamaica', currency_symbol: '$',
          }, {
            alpha2: 'JP', alpha3: 'JPN', name: 'Japan', currency_symbol: '¥',
          }, {
            alpha2: 'JE', alpha3: 'JEY', name: 'Jersey', currency_symbol: '',
          }, {
            alpha2: 'JO', alpha3: 'JOR', name: 'Jordan', currency_symbol: 'د.ا',
          }, {
            alpha2: 'KZ', alpha3: 'KAZ', name: 'Kazakhstan', currency_symbol: '〒',
          }, {
            alpha2: 'KE', alpha3: 'KEN', name: 'Kenya', currency_symbol: 'Sh',
          }, {
            alpha2: 'KI', alpha3: 'KIR', name: 'Kiribati', currency_symbol: '',
          }, {
            alpha2: 'KR', alpha3: 'KOR', name: 'South Korea', currency_symbol: '₩',
          }, {
            alpha2: 'KW', alpha3: 'KWT', name: 'Kuwait', currency_symbol: 'د.ك',
          }, {
            alpha2: 'KG', alpha3: 'KGZ', name: 'Kyrgyz Republic', currency_symbol: '',
          }, {
            alpha2: 'LV', alpha3: 'LVA', name: 'Latvia', currency_symbol: '€',
          }, {
            alpha2: 'LS', alpha3: 'LSO', name: 'Lesotho', currency_symbol: 'L',
          }, {
            alpha2: 'LI', alpha3: 'LIE', name: 'Liechtenstein', currency_symbol: '₣',
          }, {
            alpha2: 'LT', alpha3: 'LTU', name: 'Lithuania', currency_symbol: '',
          }, {
            alpha2: 'LU', alpha3: 'LUX', name: 'Luxembourg', currency_symbol: '€',
          }, {
            alpha2: 'MK', alpha3: 'MKD', name: 'Macedonia', currency_symbol: 'ден',
          }, {
            alpha2: 'MG', alpha3: 'MDG', name: 'Madagascar', currency_symbol: '',
          }, {
            alpha2: 'MW', alpha3: 'MWI', name: 'Malawi', currency_symbol: 'MK',
          }, {
            alpha2: 'MY', alpha3: 'MYS', name: 'Malaysia', currency_symbol: 'RM',
          }, {
            alpha2: 'MV', alpha3: 'MDV', name: 'Maldives', currency_symbol: 'ރ.',
          }, {
            alpha2: 'ML', alpha3: 'MLI', name: 'Mali', currency_symbol: '',
          }, {
            alpha2: 'MT', alpha3: 'MLT', name: 'Malta', currency_symbol: '€',
          }, {
            alpha2: 'MU', alpha3: 'MUS', name: 'Mauritius', currency_symbol: '₨',
          }, {
            alpha2: 'MX', alpha3: 'MEX', name: 'Mexico', currency_symbol: '$',
          }, {
            alpha2: 'MD', alpha3: 'MDA', name: 'Moldova', currency_symbol: 'L',
          }, {
            alpha2: 'MC', alpha3: 'MCO', name: 'Monaco', currency_symbol: '€',
          }, {
            alpha2: 'MN', alpha3: 'MNG', name: 'Mongolia', currency_symbol: '₮',
          }, {
            alpha2: 'ME', alpha3: 'MNE', name: 'Montenegro', currency_symbol: '€',
          }, {
            alpha2: 'MS', alpha3: 'MSR', name: 'Montserrat', currency_symbol: '$',
          }, {
            alpha2: 'MA', alpha3: 'MAR', name: 'Morocco', currency_symbol: 'د.م.',
          }, {
            alpha2: 'NA', alpha3: 'NAM', name: 'Namibia', currency_symbol: '$',
          }, {
            alpha2: 'NP', alpha3: 'NPL', name: 'Nepal', currency_symbol: '₨',
          }, {
            alpha2: 'NL', alpha3: 'NLD', name: 'Netherlands', currency_symbol: '€',
          }, {
            alpha2: 'NC', alpha3: 'NCL', name: 'New Caledonia', currency_symbol: '₣',
          }, {
            alpha2: 'NZ', alpha3: 'NZL', name: 'New Zealand', currency_symbol: '$',
          }, {
            alpha2: 'NG', alpha3: 'NGA', name: 'Nigeria', currency_symbol: '₦',
          }, {
            alpha2: 'NO', alpha3: 'NOR', name: 'Norway', currency_symbol: 'kr',
          }, {
            alpha2: 'OM', alpha3: 'OMN', name: 'Oman', currency_symbol: 'ر.ع.',
          }, {
            alpha2: 'PK', alpha3: 'PAK', name: 'Pakistan', currency_symbol: '₨',
          }, {
            alpha2: 'PS', alpha3: 'PSE', name: 'Palestine', currency_symbol: '₪',
          }, {
            alpha2: 'PA', alpha3: 'PAN', name: 'Panama', currency_symbol: 'B/.',
          }, {
            alpha2: 'PG', alpha3: 'PNG', name: 'Papua New Guinea', currency_symbol: 'K',
          }, {
            alpha2: 'PY', alpha3: 'PRY', name: 'Paraguay', currency_symbol: '₲',
          }, {
            alpha2: 'PE', alpha3: 'PER', name: 'Peru', currency_symbol: 'S/.',
          }, {
            alpha2: 'PH', alpha3: 'PHL', name: 'Philippines', currency_symbol: '₱',
          }, {
            alpha2: 'PL', alpha3: 'POL', name: 'Poland', currency_symbol: 'zł',
          }, {
            alpha2: 'PT', alpha3: 'PRT', name: 'Portugal', currency_symbol: '€',
          }, {
            alpha2: 'QA', alpha3: 'QAT', name: 'Qatar', currency_symbol: 'ر.ق',
          }, {
            alpha2: 'RO', alpha3: 'ROU', name: 'Romania', currency_symbol: 'L',
          }, {
            alpha2: 'RW', alpha3: 'RWA', name: 'Rwanda', currency_symbol: '₣',
          }, {
            alpha2: 'LC', alpha3: 'LCA', name: 'Saint Lucia', currency_symbol: '$',
          }, {
            alpha2: 'VC', alpha3: 'VCT', name: 'St.Vincent and Grenadines', currency_symbol: '$',
          }, {
            alpha2: 'SN', alpha3: 'SEN', name: 'Senegal', currency_symbol: '',
          }, {
            alpha2: 'RS', alpha3: 'SRB', name: 'Serbia', currency_symbol: 'din',
          }, {
            alpha2: 'SC', alpha3: 'SYC', name: 'Seychelles', currency_symbol: '₨',
          }, {
            alpha2: 'SL', alpha3: 'SLE', name: 'Sierra Leone', currency_symbol: 'Le',
          }, {
            alpha2: 'SG', alpha3: 'SGP', name: 'Singapore', currency_symbol: '$',
          }, {
            alpha2: 'SK', alpha3: 'SVK', name: 'Slovakia', currency_symbol: '€',
          }, {
            alpha2: 'SI', alpha3: 'SVN', name: 'Slovenia', currency_symbol: '€',
          }, {
            alpha2: 'SB', alpha3: 'SLB', name: 'Solomon Islands', currency_symbol: '$',
          }, {
            alpha2: 'ZA', alpha3: 'ZAF', name: 'South Africa', currency_symbol: 'R',
          }, {
            alpha2: 'ES', alpha3: 'ESP', name: 'Spain', currency_symbol: '€',
          }, {
            alpha2: 'SR', alpha3: 'SUR', name: 'Suriname', currency_symbol: '$',
          }, {
            alpha2: 'SE', alpha3: 'SWE', name: 'Sweden', currency_symbol: 'kr',
          }, {
            alpha2: 'CH', alpha3: 'CHE', name: 'Switzerland', currency_symbol: '₣',
          }, {
            alpha2: 'TW', alpha3: 'TWN', name: 'Taiwan', currency_symbol: '$',
          }, {
            alpha2: 'TZ', alpha3: 'TZA', name: 'Tanzania', currency_symbol: 'Sh',
          }, {
            alpha2: 'TH', alpha3: 'THA', name: 'Thailand', currency_symbol: '฿',
          }, {
            alpha2: 'TL', alpha3: 'TLS', name: 'Timor-Leste', currency_symbol: '$',
          }, {
            alpha2: 'TG', alpha3: 'TGO', name: 'Togo', currency_symbol: '',
          }, {
            alpha2: 'TN', alpha3: 'TUN', name: 'Tunisia', currency_symbol: 'د.ت',
          }, {
            alpha2: 'TR', alpha3: 'TUR', name: 'Turkey', currency_symbol: '₤',
          }, {
            alpha2: 'TC', alpha3: 'TCA', name: 'Turks and Caicos Islands', currency_symbol: '$',
          }, {
            alpha2: 'UG', alpha3: 'UGA', name: 'Uganda', currency_symbol: 'Sh',
          }, {
            alpha2: 'UA', alpha3: 'UKR', name: 'Ukraine', currency_symbol: '₴',
          }, {
            alpha2: 'AE', alpha3: 'ARE', name: 'United Arab Emirates', currency_symbol: 'د.إ',
          }, {
            alpha2: 'US', alpha3: 'USA', name: 'United States', currency_symbol: '$',
          }, {
            alpha2: 'UY', alpha3: 'URY', name: 'Uruguay', currency_symbol: '$',
          }, {
            alpha2: 'UZ', alpha3: 'UZB', name: 'Uzbekistan', currency_symbol: '',
          }, {
            alpha2: 'VN', alpha3: 'VNM', name: 'Vietnam', currency_symbol: '₫',
          }, {
            alpha2: 'VG', alpha3: 'VGB', name: 'British Virgin Islands', currency_symbol: '$',
          }, {
            alpha2: 'ZM', alpha3: 'ZMB', name: 'Zambia', currency_symbol: 'ZK',
          }, {
            alpha2: 'CW', alpha3: 'CUW', name: 'Curacao', currency_symbol: 'ƒ',
          }, {
            alpha2: 'CZ', alpha3: 'CZE', name: 'Czech Republic', currency_symbol: 'Kč',
          }, {
            alpha2: 'GQ', alpha3: 'GNQ', name: 'Equatorial Guinea', currency_symbol: '₣',
          }, {
            alpha2: 'MO', alpha3: 'MAC', name: 'Macao', currency_symbol: 'P',
          }, {
            alpha2: 'GB', alpha3: 'GBR', name: 'Great Britain - UK', currency_symbol: '£',
          },
        ],
      },
      unsupported: {
        type: Array,
        required: true,
        default: [
          {
            alpha2: 'IR',
            name: 'Iran',
          },
          {
            alpha2: 'SY',
            name: 'Syria',
          },
          {
            alpha2: 'CU',
            name: 'Cuba',
          },
          {
            alpha2: 'IQ',
            name: 'Iraq',
          },
          {
            alpha2: 'KP',
            name: 'North Korea',
          },
          {
            alpha2: 'BY',
            name: 'Belarus',
          },
          {
            alpha2: 'YE',
            name: 'Yemen',
          },
          {
            alpha2: 'ZW',
            name: 'Zimbabwe',
          },
          {
            alpha2: 'SD',
            name: 'Sudan',
          },
          {
            alpha2: 'MM',
            name: 'Myanmar',
          },
          {
            alpha2: 'LY',
            name: 'Libya',
          },
          {
            alpha2: 'CF',
            name: 'Central African Republic',
          },
          {
            alpha2: 'LB',
            name: 'Lebanon',
          },
          {
            alpha2: 'SO',
            name: 'Somalia',
          },
          {
            alpha2: 'CD',
            name: 'DR Congo',
          },
          {
            alpha2: 'VE',
            name: 'Venezuela',
          },
          {
            alpha2: 'AF',
            name: 'Afghanistan',
          },
          {
            alpha2: 'HT',
            name: 'Haiti',
          },
          {
            alpha2: 'LR',
            name: 'Liberia',
          },
          {
            alpha2: 'CI',
            name: "Cote d'Ivoire(Ivory Coast)",
          },
          {
            alpha2: 'ET',
            name: 'Ethiopia',
          },
          {
            alpha2: 'HK',
            name: 'Hong Kong',
          },
          {
            alpha2: 'VN',
            name: 'Vietnam',
          },
          {
            alpha2: 'CY',
            name: 'Cyprus',
          },
          {
            alpha2: 'ER',
            name: 'Eritrea',
          },
          {
            alpha2: 'SS',
            name: 'South Sudan',
          },
          {
            alpha2: 'LK',
            name: 'Sri Lanka',

          },
        ],
      },
    },
  },
  account: {
    parameters: {
      corporate: {
        type: Object,
        required: true,
        default: {
          info: {
            title: 'Tell Us More About Your Company',
            companyName: {
              required: true,
              minLength: 2,
              maxLength: 100,
              name: 'Company Name',
              label: 'Company Name',
              type: 'text',
            },
            companyType: {
              required: true,
              minLength: 2,
              maxLength: 100,
              name: 'Company Type',
              label: 'Company Type',
              type: 'select',
              options: [
                {
                  label: 'Public Limited Company',
                  value: 'public',
                },
                {
                  label: 'Private Limited Company',
                  value: 'private',
                },
                {
                  label: 'Sole Proprietorship',
                  value: 'sole',
                },
              ],
            },
            legalName: {
              required: true,
              minLength: 2,
              maxLength: 100,
              name: 'Legal Name',
              label: 'Legal Name',
              type: 'text',
            },
            website: {
              required: false,
              minLength: 2,
              maxLength: 100,
              name: 'Website',
              label: 'Website',
              type: 'text',
            },
            cac: {
              required: true,
              minLength: 2,
              maxLength: 15,
              name: 'CAC',
              label: 'Corporate Affairs Commission',
            },
            numberOfEmployees: {
              required: true,
              minLength: 2,
              maxLength: 100,
              name: 'Number of Employees',
              label: 'Number of Employees',
              type: 'select',
              options: [
                {
                  value: '1-10',
                  label: '1-10',
                },
                {
                  value: '11-50',
                  label: '11-50',
                },
                {
                  value: '51-100',
                  label: '51-100',
                },
                {
                  value: '101-500',
                  label: '101-500',
                },
                {
                  value: '501-1000',
                  label: '501-1000',
                },
              ],
            },
            industry: {
              required: true,
              minLength: 2,
              maxLength: 100,
              name: 'Industry',
              label: 'Industry',
              type: 'select',
              options: [
                {
                  value: 'agriculture',
                  label: 'Agriculture',
                },
                {
                  value: 'transportation',
                  label: 'Transportation',
                },
                {
                  value: 'manufacturing',
                  label: 'Manufacturing',
                },
                {
                  value: 'construction',
                  label: 'Construction',
                },
                {
                  value: 'consulting',
                  label: 'Consulting',
                },
                {
                  value: 'education',
                  label: 'Education Services',
                },
                {
                  value: 'energy',
                  label: 'Energy',
                },
                {
                  value: 'entertainment',
                  label: 'Entertainment',
                },
                {
                  value: 'finance',
                  label: 'Financial Services',
                },
                {
                  value: 'food',
                  label: 'Food & Beverage',
                },
                {
                  value: 'info-tech',
                  label: 'Information Technology & Services',
                },
                {
                  value: 'ecommerce',
                  label: 'E Commerce',
                },
                {
                  value: 'accounting',
                  label: 'Accounting',
                },
                {
                  value: 'computer',
                  label: 'Computer Hardware & Software',
                },
                {
                  value: 'automotive',
                  label: 'Automotive',
                },
                {
                  value: 'marketing',
                  label: 'Market & Advertisment',
                },
                {
                  value: 'health',
                  label: 'Health, Wellness & Fitness',
                },
                {
                  value: 'estate',
                  label: 'Real Estate',
                },
                {
                  value: 'telecommunications',
                  label: 'Telecommunications.',
                },
                {
                  value: 'medical',
                  label: 'Medical Services',
                },
                {
                  value: 'engineering',
                  label: 'Engineering',
                },
                {
                  value: 'manufacturing',
                  label: 'Manufacturing',
                },
                {
                  value: 'insurance',
                  label: 'Insurance.',
                },
                {
                  value: 'consumer',
                  label: 'Consumer Goods.',
                },
                {
                  value: 'logistics',
                  label: 'Logistics & Supply chain',
                },
                {
                  value: 'legal',
                  label: 'Legal Services',
                },
                {
                  value: 'ngo',
                  label: 'Non-Profit Organization',
                },
                {
                  value: 'utilities',
                  label: 'Utilities',
                },
                {
                  value: 'others',
                  label: 'Others.',
                },
              ],
            },
            description: {
              required: false,
              minLength: 2,
              maxLength: 250,
              name: 'Description',
              label: 'Describe your company in 250 characters less',
              type: 'text',
            },
            isCrypto: {
              required: true,
              name: 'isCrypto',
              label: 'Is Crypto',
              type: 'radio',
            },
          },
          contact: {
            title: 'Company Contact Information',
            address: {
              required: true,
              minLength: 2,
              maxLength: 100,
              name: 'address',
              label: 'Address',
              type: 'text',
            },
            unitNumber: {
              required: false,
              minLength: 2,
              maxLength: 100,
              name: 'number',
              label: 'Apartment/Suite/Floor',
              type: 'text',
            },
            city: {
              required: false,
              minLength: 2,
              maxLength: 100,
              name: 'city',
              label: 'City',
              type: 'text',
            },
            state: {
              required: false,
              minLength: 2,
              maxLength: 100,
              name: 'state',
              label: 'State',
              type: 'text',
            },
            postalCode: {
              required: false,
              minLength: 2,
              maxLength: 6,
              name: 'postalCode',
              label: 'Postal Code',
              type: 'text',
            },
            phone: {
              required: false,
              minLength: 2,
              maxLength: 100,
              name: 'phone',
              label: 'Phone',
              type: 'text',
            },
          },
          ownership: {
            title: 'Ownership Information',
            firstName: {
              required: true,
              minLength: 2,
              maxLength: 100,
              name: 'firstName',
              label: 'First Name',
              type: 'text',
            },
            lastName: {
              required: true,
              minLength: 2,
              maxLength: 100,
              name: 'lastName',
              label: 'Last Name',
              type: 'text',
            },
            email: {
              required: true,
              minLength: 2,
              maxLength: 100,
              name: 'email',
              label: 'Email',
              type: 'email',
            },
            phone: {
              required: true,
              minLength: 2,
              maxLength: 100,
              name: 'phone',
              label: 'Phone',
              type: 'text',
            },
            type: {
              required: true,
              name: 'type',
              label: 'I am a',
              type: 'select',
              options: [
                {
                  value: 'founder',
                  label: 'Founder',
                },
                {
                  value: 'co-founder',
                  label: 'Co-Founder',
                },
                {
                  value: 'director',
                  label: 'Director',
                },
              ],
            },
            percentage: {
              required: false,
              minLength: 2,
              maxLength: 100,
              name: 'Percentage',
              label: 'Ownership Percentage',
              type: 'text',
            },
            details: {
              required: false,
              minLength: 2,
              maxLength: 100,
              name: 'details',
              label: 'Details',
              type: 'text',
            },
            bvn: {
              required: false,
              minLength: 10,
              maxLength: 10,
              name: 'bvn',
              label: 'BVN',
              type: 'text',
            },
            address: {
              required: false,
              minLength: 2,
              maxLength: 100,
              name: 'Address',
              label: 'Address',
              type: 'text',
            },
            unitNumber: {
              required: false,
              minLength: 2,
              maxLength: 100,
              name: 'number',
              label: 'Apartment/Suite/Floor',
              type: 'text',
            },
            city: {
              required: false,
              minLength: 2,
              maxLength: 100,
              name: 'city',
              label: 'City',
              type: 'text',
            },
            state: {
              required: false,
              minLength: 2,
              maxLength: 100,
              name: 'state',
              label: 'State',
              type: 'text',
            },
            postalCode: {
              required: false,
              minLength: 2,
              maxLength: 6,
              name: 'postalCode',
              label: 'Postal Code',
              type: 'text',
            },
          },
          documents: {
            title: 'Please Upload The Neccesary Documents',
            documentType: {
              required: true,
              type: 'select',
              name: 'type',
              label: 'Document Type',
              options: [
                {
                  value: 'cac',
                  label: 'CAC Registration Certificate',
                },
                {
                  value: 'cac02-07',
                  label: 'CAC 02 Registration Certificate',
                },
                {
                  value: 'address',
                  label: 'Proof of Address',
                },
              ],
            },
            documentUrl: {
              fileName: {
                required: true,
                name: 'fileName',
                label: 'Uploaded File',
                type: 'file',
                diabled: true,
                readonly: true,
                mimeTypes: ['application/pdf', 'image/png', 'image/jpeg'],
              },
              uploader: {
                required: true,
                maxSize: 100000,
                name: 'uploader',
                label: 'Uploader',
                type: 'text',
              },
            },
          },
          operations: {
            title: 'Is Your Company Any of the Following?',
            operation: {
              required: true,
              type: 'checkbox',
              name: 'operation',
              label: 'Operation',
              options: [
                {
                  label: 'Registered with the SEC',
                  value: 'operation1',
                },
                {
                  label: 'A publicly-traded company',
                  value: 'operation2',
                },
                {
                  label: 'Majority Owned by a public company',
                  value: 'operation3',
                },
                {
                  label: 'An Internet gambling business',
                  value: 'operation4',
                },
                {
                  label: `A money services business (e.g. an ATM 
                    operator, foreign currency exchange, check 
                    cashing service, or a cryptocurrency exchange)`,
                  value: 'operation5',
                },
                {
                  label: 'Dealing with Controlled Substances (THC, other Schedule 1 drugs)',
                  value: 'operation6',
                },
                {
                  label: 'Involved in the sale, distribution or manufacturing of firearms or ammunition',
                  value: 'operation7',
                },
                {
                  label: 'A Governmental Organization',
                  value: 'operation8',
                },
                {
                  label: 'Part of a Tax Anticipation Program',
                  value: 'operation9',
                },
                {
                  label: 'An Adult Entertainment Business',
                  value: 'operation10',
                },

              ],
            },
          },
        },
      },
    },
  },
  platform: {
    supported: {
      currencies: {
        type: Array,
        required: true,
        default: [
          {
            alpha2: 'US',
            alpha3: 'USD',
            name: 'United States',
            currency: 'USD',
            currency_symbol: '$',
          },
        ],
      },
    },
    payment: {
      processors: {
        type: Array,
        required: true,
        default: [
          {
            key: 'paystack',
            fee: 0.01,
            active: false,
            fee_cap: 40,
            transaction_wait_time: 120000,
          },
          {
            key: 'flutterwave',
            fee: 0.01,
            active: true,
            fee_caps: {
              level1: {
                min: 0,
                max: 5000000,
                value: 40,
              },
              level2: {
                min: 5000001,
                max: 10000000,
                value: 200,
              },
              level3: {
                min: 10000001,
                max: 50000000,
                value: 500,
              },
              level4: {
                min: 50000001,
                max: 100000000,
                value: 1000,
              },
              level5: {
                min: 100000001,
                max: 200000000,
                value: 1500,
              },
            },
            transaction_wait_time: 120000,
          },
          {
            key: 'payable',
            fee: 0,
            active: false,
            fee_cap: 0,
            transaction_wait_time: 0,
          },
        ],
      },
      offline: {
        type: Object,
        required: true,
        default: {
          accountNumber: '0124083824',
          accountName: 'UNITEX DATALLY TECHNOLOGIES LTD',
          bankName: 'Wema Bank',
          bankCode: 'GTB',
          accountType: 'savings',
          instructions: 'Copy and paste the Transaction Ref: in the Narration/Notes when making the bank transfer. This will help us promptly process your funding request.',
        },
      },
      methods: {
        type: Array,
        required: true,
        default: [
          {
            label: 'Bank Transfer',
            value: 'bankTransfer',
            description: 'Pay via bank transfer',
            duration: 'immidiate',
            fee: '0',
            // level: ['level2'],
            max: 5000000,
          },
          {
            label: 'Offline Payment',
            value: 'offline',
            description: 'Pay offline',
            duration: 'Less than 24 hours',
            fee: '0',
            // level: ['level2', 'level3'],
            max: Infinity,
          },
        ],
      },
      levels: {
        type: Array,
        required: true,
        default: [
          {
            label: 'Level 1',
            value: 'level1',
            max: 1000000,
            min: 0,
          },
          {
            label: 'Level 2',
            value: 'level2',
            max: 5000000,
            min: 1000001,
          },
          {
            label: 'Level 3',
            value: 'level3',
            max: Infinity,
            min: 5000001,
          },
        ],
      },
    },
    operations: {
      baseCurrency: {
        type: String,
        required: true,
        default: 'NGN',
      },
      cardFee: {
        type: Array,
        required: true,
        default: {
          USD: {
            amount: 10,
          },
        },
      },
    },
  },
} as {
  [key: string]: {
    [key: string]: {
      [key: string]: {
        type: object[] | object | string | any,
        required: boolean,
        default: any,
      }
    }
  }
};
