import { AuthorizationService } from './authorization.service';
import { PermissionAction } from './actions.enum';

describe('AuthorizationService', () => {
  describe('evaluateGrants', () => {
    it('denies access when no grants match', () => {
      const grants = [];
      expect(
        AuthorizationService.evaluateGrants(grants, PermissionAction.READ, 'district:1/school:5'),
      ).toBe(false);
    });

    it('allows access when matching allow grant exists', () => {
      const grants = [
        { action: 'READ', resourcePath: 'district:1/*', allow: true },
      ];
      expect(
        AuthorizationService.evaluateGrants(grants, PermissionAction.READ, 'district:1/school:5'),
      ).toBe(true);
    });

    it('denies access when more specific deny exists', () => {
      const grants = [
        { action: 'READ', resourcePath: 'district:1/*', allow: true },
        { action: 'READ', resourcePath: 'district:1/school:5/*', allow: false },
      ];
      expect(
        AuthorizationService.evaluateGrants(grants, PermissionAction.READ, 'district:1/school:5/class:10'),
      ).toBe(false);
    });

    it('uses ALL action for any requested action', () => {
      const grants = [
        { action: 'ALL', resourcePath: 'district:1/*', allow: true },
      ];
      expect(
        AuthorizationService.evaluateGrants(grants, PermissionAction.ENTER_GRADES, 'district:1/school:5'),
      ).toBe(true);
    });

    it('uses wildcard action * for any requested action', () => {
      const grants = [
        { action: '*', resourcePath: '*', allow: true },
      ];
      expect(
        AuthorizationService.evaluateGrants(grants, PermissionAction.DELETE, 'district:1/school:5/class:10'),
      ).toBe(true);
    });
  });
});
