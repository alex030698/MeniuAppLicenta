using Microsoft.EntityFrameworkCore.Migrations;

namespace Meniu.Data.Migrations
{
    public partial class deleteFood1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_Food1_preparationid",
                table: "Order");

            migrationBuilder.DropTable(
                name: "Food1");

            migrationBuilder.AddColumn<int>(
                name: "amount",
                table: "Food",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Order_Food_preparationid",
                table: "Order",
                column: "preparationid",
                principalTable: "Food",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_Food_preparationid",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "amount",
                table: "Food");

            migrationBuilder.CreateTable(
                name: "Food1",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    amount = table.Column<int>(type: "int", nullable: false),
                    ingredients = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    preparationTime = table.Column<int>(type: "int", nullable: false),
                    price = table.Column<float>(type: "real", nullable: false),
                    type = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Food1", x => x.id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Order_Food1_preparationid",
                table: "Order",
                column: "preparationid",
                principalTable: "Food1",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
