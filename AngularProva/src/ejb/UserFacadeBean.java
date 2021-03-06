/**
 * @author Marc Colom Royo - mcolomro@gmail.com
 * 
 */

package ejb;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import jpa.UserJPA;

/**
 * @author Marc Colom Royo - mcolomro@gmail.com
 */

@Stateless
public class UserFacadeBean implements UserFacadeRemote {

	// Persistence Unit Context
	@PersistenceContext(unitName = "AngularProva")
	private EntityManager entman;
	
	@Override
	public void addUser(UserJPA user) {		
		entman.persist(user);		
	}	
	
	@Override
	public List<UserJPA> listAllUsers() {
		@SuppressWarnings("unchecked")
		List<UserJPA> allUsersJPA = entman.createQuery("from UserJPA order by user_id").getResultList();		
		return allUsersJPA;
	}
	
	@Override
	public List<UserJPA> showUser() {
		List<UserJPA> allUsersJPA = new ArrayList<UserJPA>(); 
		UserJPA u = new UserJPA();
		u.setName("A cagar");		
		u.setEmail("acagar@pelcul.com");
		allUsersJPA.add(u);
		return allUsersJPA;
	}

}