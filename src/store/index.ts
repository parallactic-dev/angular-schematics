import { Rule, Tree, SchematicContext, url, apply, template, mergeWith, move } from '@angular-devkit/schematics';
import { Schema } from './schema';
import { strings } from '@angular-devkit/core';
import { plural } from 'pluralize';

export function index(_options: Schema): Rule {

    return (tree: Tree, _context: SchematicContext) => {
        const sourceTemplates = url('./files');

        _options.name = getFeatureName(_options.path);

        const sourceParameterizedTemplates = apply(sourceTemplates,  [
            template({
                ... _options,
                ... strings,
                uppercase,
                pluralize
            }),
            move(getFeaturePath(_options.path))
        ]);

        function uppercase(value: string): string {
            return value.toUpperCase();
        }

        function pluralize(value: string): string {
            return plural(value);
        }

        return mergeWith(sourceParameterizedTemplates)(tree, _context);

    }
}

function getFeatureName(path: string): string {
    const splits: string[] = path.split('/');
    return splits.length > 0 ? splits[splits.length - 1] : 'unnamed';
}

function getFeaturePath(path: string): string {
    const splits: string[] = path.split('/');
    let value: string = '';
    splits.forEach((item, i) => {
        if (i < splits.length - 1)
            value += item
    })
    return value;
}
