import {getEntry} from 'astro:content';

// The three results that open the homepage. Each points at the case study that
// substantiates it, and the build fails if that case study disappears, so the
// homepage can never quote a number the site no longer backs up.
interface ProofPoint {
    readonly value: string;
    readonly label: string;
    readonly client: string;
    readonly slug: string;
}

const candidates: readonly ProofPoint[] = [
    {
        value: 'Months to days',
        label: 'U.S. passport renewal time, without a day offline',
        client: 'U.S. Department of State',
        slug: 'consular-systems-modernization-state-department'
    },
    {
        value: '3×',
        label: 'reservations across the nation\'s parks and public lands',
        client: 'Recreation.gov',
        slug: 'recreation-gov-modernization'
    },
    {
        value: '30%+',
        label: 'faster application on HealthCare.gov',
        client: 'HealthCare.gov',
        slug: 'healthcare-gov-modernization'
    }
];

export interface Proof extends ProofPoint {
    readonly href: string;
    readonly title: string;
}

export const proofPoints: readonly Proof[] = await Promise.all(candidates.map(async (p) => {
    const study = await getEntry('caseStudies', p.slug);
    if (!study) {
        throw new Error(`Homepage proof point "${p.value}" cites a case study that does not exist: ${p.slug}`);
    }
    return {...p, href: `/case-studies/${p.slug}`, title: study.data.title};
}));
