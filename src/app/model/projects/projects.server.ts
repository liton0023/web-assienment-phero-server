import { IProjects } from './projects.interface';
import { Projects } from './projects.model';

const createProject = async (payload: IProjects): Promise<IProjects | null> => {
  const result = await Projects.create(payload);
  return result;
};

export const ProjectService = {
  createProject,
};
