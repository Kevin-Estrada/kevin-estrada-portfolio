// We import object and document schemas
import languageTech from './languageTech';
import framesLibsTech from './framesLibsTech';
import projectsDoc from './projectsDoc';
import certificatesDoc from './certificatesDoc';

// Then we give our schema to the builder and provide the result to Sanity
export default [
	languageTech,
	framesLibsTech,
	projectsDoc,
	certificatesDoc,
]
