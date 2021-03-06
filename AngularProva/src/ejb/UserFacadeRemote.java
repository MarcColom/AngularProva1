package ejb;

/**
 * @author Marc Colom Royo - mcolomro@gmail.com
 */

import java.util.List;

import javax.ejb.Remote;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import jpa.UserJPA;

@Remote
@Path("/WSUserRest")
public interface UserFacadeRemote {

	@POST	
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/addUser")	
	public void addUser(UserJPA user);	
	
	@GET	
	@Produces("application/json")
	@Path("/listAllUsers")
	public List<UserJPA> listAllUsers();	
	
	@GET	
	@Produces("application/json")
	@Path("/showUser")
	public List<UserJPA> showUser();
}