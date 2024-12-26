import { Editor as RootEditor, type Options } from '@craftjs/core';
import { RootContainer } from './components/Container';
import {
	BaseMaterials,
	LayoutMaterials,
	DataDisplayMaterials,
	FormMaterials,
	FeedbackMaterials,
} from '@aws-codeless-web/materials';

interface EditorRootWrapperProps extends Partial<Options> {
	children?: React.ReactNode;
}

const resolver = Object.assign(
	{ RootContainer },
	BaseMaterials,
	LayoutMaterials,
	DataDisplayMaterials,
	FormMaterials,
	FeedbackMaterials,
);

export const EditorRootWrapper: React.FC<EditorRootWrapperProps> = (props) => {
	return (
		<RootEditor {...props} resolver={resolver}>
			{props.children}
		</RootEditor>
	);
};
